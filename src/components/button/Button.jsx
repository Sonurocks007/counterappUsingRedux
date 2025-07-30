import React from 'react';

const Button = ({ title, onClick, style  }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
