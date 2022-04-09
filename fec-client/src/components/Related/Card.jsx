import React, {useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Modal from './Modal.jsx';
import Star from '../Shared/Stars.jsx';
import PreviewImage from './PreviewImage.jsx';

const ProductCard = styled.div`
  display : flex;
  flex-direction: column;
  position : relative;

//min-width: 0;
// flex: 1;
border: solid;
border-color: lightgray;
//flex: 0 0 25%
  background : white;
&:hover {
    z-index : 20;
    transform: scale(1.2);

}

// &:nth-child(2) {
//   flex: 0 0 25%;
// }
// &:nth-child(3) {
//   flex: 0 0 25%;
// }
// &:nth-child(4) {
//   flex: 0 0 25%;
// }
// &:nth-child(5) {
//   flex: 0 0 25%;
// }
`;


const CardDiv = styled.div`
  width: fit-content;
  line-height: 0.8em;
`;
const CardText = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 1px;
`;

const PreviewImg = styled.img`
position : relative;
height : 100%;
z-index: 2;
transition: all 0.2s linear;
}
`;

const ActionButton = styled.img`
  position : relative;
  left:83%;
  z-index:7;
  &:hover {
    transform: scale(1.3);
  }
`;


const Card = ({productInfo , styleInfo})=> {
  // const { product , style } = productInfo;

  // const [info, setInfo] = useState(null);
  // const [style, setStyle] = useState(null);
  const image = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(()=>{
    // console.log('product info in card', productInfo);
    // console.log('style info in card', styleInfo);
  },[productInfo]);


  return(
    <div>
      <Modal show={show} handleClose={() => {setShow(false);}} productInfo = {productInfo}></Modal>
    <ProductCard>
      <div>
        <ActionButton src = "https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" onClick={() => {setShow(!show);}}></ActionButton>
      </div>

    <PreviewImage productInfo = {productInfo} styleInfo ={styleInfo}/>
    </ProductCard>
    </div>
  )
}

export default Card;