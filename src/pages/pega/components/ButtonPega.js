import React from "react";

const ButtonPega = ({ buttonLabel, customStlye, onClick, isVisible }) => {
  return (
    <>
      {isVisible ? (

        <button
          className={`buttonLogin_${customStlye}`}
          onClick={onClick}
          style={{ width: "100%" , maxWidth: "500px"}}
        >
          {buttonLabel}
        </button>

      ) : (
        ""
      )}
    </>
  );
};
export default ButtonPega;
