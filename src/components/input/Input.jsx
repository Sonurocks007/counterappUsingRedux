import React from 'react';

export const Input = ({ type = "text", value, onChange, placeholder, style }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded-md outline-none transition duration-300 shadow-sm ${style}`}
    />
  );
};