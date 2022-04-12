import React, {useState} from 'react';
import WriteModal from './WriteModal.jsx';



const Write = ({relevantChars, productId, productName}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleWriteModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick = {toggleWriteModal}>Write a Review</button>
      { showModal ? <WriteModal relevantChars = {relevantChars} productId = {productId} toggleWriteModal = {toggleWriteModal} productName = {productName}/> : null}
    </div>
  );
};

export default Write;