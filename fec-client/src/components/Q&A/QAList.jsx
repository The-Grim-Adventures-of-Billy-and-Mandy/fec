import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QAListEntry from './QAListEntry.jsx';

const QAListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
  overflow-y: auto;
  max-height: 500px;
  gap: .2em;
`;

const QAList = ({QAData, productName, showUpdates, handleMoreQuestions, mode, storage, updateAllStorages}) => {
  let sortedData = QAData.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  const ref = useRef();
  let observingEntry = useRef();

  useEffect(() => {
    const callback = (entries, observer) => {
      let entry = entries[0];

      if (mode === 'search') {
        observer.unobserve(entry.target);
      } else if (entry.isIntersecting && QAData.length > 2 && mode !== 'search' && storage > QAData.length) {
        observer.unobserve(entry.target);
        handleMoreQuestions();
      }
    };

    const options = {
      root: ref.current,
      rootMargin: '2px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(callback, options);
    let children = Array.from(ref.current.children);

    if (storage > QAData.length) {
      if (children.length > 0) {
        observer.observe(children[children.length - 1]);
        observingEntry.current = children[children.length - 1];
      }
    } else {
      observer.disconnect();
    }
  }, [QAData]);

  return (
    <QAListContainer ref={ref}>{
      QAData.length ? sortedData.map((question) => <QAListEntry question={question} key={question.question_id} productName={productName} showUpdates={showUpdates} updateAllStorages={updateAllStorages} /> ) : null
    }</QAListContainer>
  );
};

export default QAList;