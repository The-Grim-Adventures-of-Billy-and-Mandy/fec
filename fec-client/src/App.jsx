import React, { useState } from 'react';
import styled from 'styled-components';

import Products from './components/Related';
import Ratings from './components/Ratings';
import Overview from './components/Overview';
import QA from './components/Q&A/QA';

const AppDiv = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  font-family: 'Open Sans';
`;

const H1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: black;
`;
const OverviewDiv = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 25%;
`;

const RelatedDiv = styled.div`
border: 1px solid black;
width: 90%;
height: 25%;
`;

const QandADiv = styled.div`
border: 1px solid black;
width: 90%;
height: 25%;
margin: 5px 0;
`;

const RatingsDiv = styled.div`
font-family: inherit;
border: 1px solid black;
width: 90%;
height: 25%;
`;


let App = () => {
  let [productId, setProductId] = useState(65631);

  return (
    <AppDiv>
      <div>
        <H1>Project Atelier</H1>
      </div>
      <div>
        <OverviewDiv>
          <Overview productId={productId} setProductId={setProductId}/>
        </OverviewDiv>

        <RelatedDiv>
          <Products productId={productId} setProductId={setProductId}/>
        </RelatedDiv>

        <QandADiv>
          <QA productId={productId}/>
        </QandADiv>

        <RatingsDiv>
          <Ratings productId={productId}/>
        </RatingsDiv>
      </div>
    </AppDiv>
  );
};

// eslint-disable-next-line no-undef
// ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render is no longer supported, need to change it to this
// https://reactjs.org/docs/react-dom-client.html


export default App;