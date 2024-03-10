import React from 'react';

const Button = ({ text, displaySummary}) => {
  return (
    <div
      className="button"
      onClick={() => {
        displaySummary();
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
