import React from 'react';

const Input = ({ value, onChange, placeholder = '', style = '' }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border px-0.5 py-2 rounded w-full ${style}`}
    />
  );
};

export default Input;
