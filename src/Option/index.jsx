import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({ type, text, onSelected }) => {
  const handleClick = () => {
    onSelected();
  };
  return (
    <div className="option">
      <Icon onClick={handleClick} type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;
