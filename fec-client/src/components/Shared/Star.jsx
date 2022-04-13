import React, {useState} from 'react';


const Star = ({fill, size, color}) => {
  return (
    <svg id ='SVG-CLASS' viewBox="0 0 51 48" width = {size}>
      <defs>
        <linearGradient id = {`gradient-${fill}`}>
<<<<<<< HEAD
          <stop offset = {'0%'} stopColor = { color }></stop>
          <stop offset = {`${fill}%`} stopColor = { color }></stop>
=======
          <stop offset = {'0%'} stopColor = { color || '#3D463D'}></stop>
          <stop offset = {`${fill}%`} stopColor = { color || '#3D463D'}></stop>
>>>>>>> main
          <stop offset = {`${fill}%`} stopColor = "#BAC3BA"></stop>
        </linearGradient>
      </defs>
      <path fill={`url(#gradient-${fill})`} stroke="white" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"> </path>
    </svg>
  );

};


export default Star;