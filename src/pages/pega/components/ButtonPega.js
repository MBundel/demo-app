import React from 'react'

 const ButtonPega = ({buttonLabel, customStlye, onClick}) => {
    
  return (
    <>

  
   
    <button
    className={`buttonLogin_${customStlye}`}
    onClick={onClick}
    style={{width: "100%"}}
    >
    {buttonLabel}
  </button>

      </>
  )

}
export default ButtonPega;

