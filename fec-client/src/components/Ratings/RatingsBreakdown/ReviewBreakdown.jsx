import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReviewBar from './ReviewBar.jsx';
import Stars from '../../Shared/Stars.jsx';
import countTotalAndAverage from '../../Shared/countTotalAndAverage.js';

const ReviewBreakdownContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
`;

const Summary = styled.div`
display: flex;
flex-direction: row;
font-size: 0.9rem;
justify-content: space-around;
align-items: flex-end;
`;

const Average = styled.div`
display: flex;
flex-direction: row;
`;

const Span = styled.span`
font-size: 4rem;
font-weight: 400;
`;

const StarContainer = styled.div`
margin-bottom: auto;
margin-top: 2rem;
`;

const Recommend = styled.div`
font-style: italic;
text-align: center;
`;

const ActiveFilters = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 20px;
`;

const Button = styled.button`
  padding: 5px;
  margin 10px;
  background-color: ${props => props.theme.darkgrayToLight};
  border: 1px solid ${props => props.theme.background};
  border-radius: 7px;
  color: #fff;

  &: hover{
    background-color: #4b464d;
    cursor: pointer;
    color: #fff;
  }

  &:active{
    background-color: #fff;
    color: #242125;
  }
`;

const ReviewBreakdown = ({ reviewData, recommended, setFilters }) => {
  const [total, average] = countTotalAndAverage( reviewData );
  const percentRecommended = Math.round(parseInt(recommended.true || 0) / total * 100);
  const [allFilters, setAllFilters] = useState(Array(5).fill(false));
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (rating) => {
    const newFilters = [...allFilters];
    newFilters[rating - 1] = !newFilters[rating - 1];
    setAllFilters(newFilters);
    setFilters(newFilters);
    setActiveFilters([1, 2, 3, 4, 5].filter((item, index) => newFilters[index]));
  };

  const handleShowAll = () => {
    setAllFilters(Array(5).fill(false));
    setFilters(Array(5).fill(false));
    setActiveFilters([]);
  };

  return (
    <ReviewBreakdownContainer title = 'review-breakdown'>
      <Summary>
        <Span title = 'average'>{average}</Span>
        <StarContainer>
          <Stars rating = {average} size = {'30'} color = {'#10451d'}/>
        </StarContainer>
        <span> {total} reviews </span>
      </Summary>
      <Recommend title = 'percent-recommended'>{percentRecommended}% of reviewers recommend this product.</Recommend>
      <ReviewBar rating = {5} num = {reviewData[5] || 0 } total = {total} toggleFilter = {toggleFilter} toggled = {allFilters[4]}/>
      <ReviewBar rating = {4} num = {reviewData[4] || 0 } total = {total} toggleFilter = {toggleFilter} toggled = {allFilters[3]}/>
      <ReviewBar rating = {3} num = {reviewData[3] || 0 } total = {total} toggleFilter = {toggleFilter} toggled = {allFilters[2]}/>
      <ReviewBar rating = {2} num = {reviewData[2] || 0 } total = {total} toggleFilter = {toggleFilter} toggled = {allFilters[1]}/>
      <ReviewBar rating = {1} num = {reviewData[1] || 0 } total = {total} toggleFilter = {toggleFilter} toggled = {allFilters[0]}/>
      <ActiveFilters> Showing { activeFilters.length ?
        activeFilters.join(', ') + '-star' :
        'all'
      } reviews
      {activeFilters.length ? <Button onClick = {handleShowAll}> View All </Button> : null}
      </ActiveFilters>
    </ReviewBreakdownContainer>
  );

};

export default ReviewBreakdown;