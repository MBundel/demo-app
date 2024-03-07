import React from 'react'

const Button = ({ buttonLabel, customStlye, onClick, isVisible, isActive }) => {
  return (
    <button
    className={`buttonLogin_${customStlye}`}
    onClick={onClick}
    style={{ width: "100%" , maxWidth: "500px"}}
  >
    {buttonLabel}
  </button>
  )
}

export default Button