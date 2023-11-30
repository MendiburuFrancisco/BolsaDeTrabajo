// create a button component 

import React from 'react';
// import './PrimaryButton.css';

 
const PrimaryButton = ({id,type,text,onClick}) => {

    if (onClick == null) {
      return (
        <button
        id={id}
        type={type}
        className="block w-full  bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 ">
          {text}
      </button>
    )};
    
    return (
        <button
        id={id}
        type={type}
        onClick={onClick}
        className="block w-full  bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 "
      >
        {text}
      </button>
    );
}

export default PrimaryButton;