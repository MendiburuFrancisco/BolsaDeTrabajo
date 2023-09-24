import React from 'react';

const FormInput = ({type, id, value,placeholder, onChange,required}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300  shadow-sm ring-1 focus:ring-2 focus:ring-inset"
      {...required?{required:true}:{required:false}}
    />
  );
};

export default FormInput;
