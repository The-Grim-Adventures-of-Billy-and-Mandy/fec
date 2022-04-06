import React from 'react';
import styled from 'styled-components';

import ReviewBreakdown from './ReviewBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const BreakdownContainer = styled.div`
display: flex;
flex-direction: row;
gap: 5%;
font-size: 0.8rem;
height: 200px;
background-color: #f1f1f1;
border-radius: 2px;
`;


const RatingsBreakdown = ({ metaData, filterByRating }) => {
  return (
    <BreakdownContainer>
      { metaData.ratings ? <ReviewBreakdown reviewData = { metaData.ratings} recommended = { metaData.recommended} filterByRating = {filterByRating}/> : null }
      { metaData.characteristics ? <ProductBreakdown productData = { metaData.characteristics}/> : null}
    </BreakdownContainer>
  );
};

export default RatingsBreakdown;