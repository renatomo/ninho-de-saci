import React from 'react';

const Button = ({ children, value, handleOnClick }) => (
  <button
    className="reading-area__button"
    value={ value }
    onClick={ handleOnClick }
  >
    { children }
  </button>
);

export default Button;
