import React from 'react';
import Button from 'react-bootstrap/Button';
import './MyButton.scss';

const MyButton = (props) => {
  return (
    <Button variant="danger" className="calc-button">
      {props.children}
    </Button>
  )
}

export default MyButton;
