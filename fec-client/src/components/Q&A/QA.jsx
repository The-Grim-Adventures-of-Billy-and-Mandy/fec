import React, { useState, useEffect, useRef, useInsertionEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QAList from './QAList';
import AddQModal from './AddQModal.jsx';
import { ContainerCol, ButtonContainer } from './styles/Container.styles.js';
import { Button } from './styles/Button.styles.js';

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  height: 2em;
  width: 100%;
`;

const H4 = styled.h4`
  margin-left: .7em;
`;

const QA = function ({productId}) {
  const storage = useRef([]);

  const [searchInput, setSearchInput] = useState('');
  const [QAData, setQA] = useState([]);
  const [seeMoreView, setMoreView] = useState('See More Questions');
  const [modalQ, setModalQ] = useState(false);

  const handleMoreQuestions = function() {
    QAData.length <= 4 ? setQA(storage.current) : setQA(storage.current.slice(0, 4));
    seeMoreView === 'See More Questions' ? setMoreView('See Less Questions') : setMoreView('See More Questions');
  };

  const handleAddQuestions = function() {
    setModalQ(!modalQ);
  };

  const handleSearch = function(e) {
    e.preventDefault();

    let queryQuestions = [];
    for (let q of storage.current) {
      if (q.question_body.toLowerCase().includes(searchInput.toLowerCase())) {
        queryQuestions.push(q);
      }
    }
    setQA(queryQuestions);
    setSearchInput('');
  };

  useEffect(() => {
    if (searchInput.length > 2) {
      let queryQuestions = [];
      for (let q of storage.current) {
        if (q.question_body.toLowerCase().includes(searchInput.toLowerCase())) {
          queryQuestions.push(q);
        }
      }
      setQA(queryQuestions);
    } else {
      seeMoreView === 'See More Questions' ? setQA(storage.current.slice(0, 4)) : setQA(storage.current);
    }
  }, [searchInput]);

  useInsertionEffect(() => {
    axios.get('/api', {headers: {path: `/qa/questions?product_id=${productId}&count=10000`}})
      .then((res) => {
        storage.current = res.data.results;
        setQA(res.data.results.slice(0, 4));
      })
      .catch((err) => console.error('axios request in QA.jsx on line 73:', err));
  }, []);

  return (
    <ContainerCol>
      <H4>Questions And Answers</H4>
      <SearchForm title="live-search" type="submit" onSubmit={handleSearch}>
        <StyledInput title="search-input" type="text" value={searchInput} onChange={ e => setSearchInput(e.target.value)} placeholder="Have a Question? Search for answers..."/>
        <button type="submit" >Search</button>
      </SearchForm>
      <QAList QAData={QAData}/>
      <ButtonContainer>
        <Button onClick={handleMoreQuestions}>{seeMoreView}</Button>
        <Button title="Add Question" onClick={handleAddQuestions}>Add A Question</Button>
      </ButtonContainer>
      <AddQModal show={modalQ} hide={() => setModalQ(!modalQ)}/>
    </ContainerCol>
  );
};

export default QA;
