import React from 'react';

const FormInput = ({type, id, value,placeholder, onChange,ariaLabel,required}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aira-label={ariaLabel}
      title={ariaLabel}
      className="block w-full h-14 px-3 py-2 border rounded focus:outline-none  focus:border-blue-300  shadow-sm ring-1 focus:ring-2 focus:ring-inset"
      {...required?{required:true}:{required:false}}

    />
  );
};

export default FormInput;
