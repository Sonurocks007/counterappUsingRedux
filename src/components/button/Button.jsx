import React from 'react';

const Button = ({ Icon,title, onClick, style  }) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${style}`}
    >
     
     {Icon} {title}
     

    </button>
  );
};

export default Button;
