import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
`;

const ModalContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
flex-direction: column;
align-items: flex-end;

background-color: white;
height: 40rem;
width: 35rem;
`;

const ImageCarousel = styled.div`
display: flex;
flex-direction: row;
overflow-x: auto;
`;

const ImageDisplay = styled.img`
object-fit: contain;
width: 90%;
margin: 5%;
`;

const Button = styled.button`
font-family: inherit;
width: 4rem;
border: none;
font-size: xsmall;
background-color: white;
padding: 1px;

`;


const ImagePopup = ({images, handleModal}) => (
  <Modal>
    <ModalContent onBlur = {handleModal}>
      <Button onClick = {handleModal}>CLOSE</Button>
      <ImageCarousel>
        {images.map(image => (
          <ImageDisplay src = {image.url} key = {image.id}></ImageDisplay>
        ))}
      </ImageCarousel>
    </ModalContent>
  </Modal>
);

export default ImagePopup;