import React from 'react';
import "./switch.scss";

const Switch = ({position, onClick}) => {


  return (
    <div className={`container ${position}`}>
    <label className="switch" for="checkbox">
      <input type="checkbox" id="checkbox" 
       onClick={onClick}
      />
      <div className="slider round"></div>
    </label>
  </div>
  )
}

export default Switch