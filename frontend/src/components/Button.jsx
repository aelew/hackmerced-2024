import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <div
      className="button"
      onClick={() => {
        onClick();
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
