import React from "react";
import Button from "../../../components/controls/Button";

const ButtonPega = ({ buttonLabel, customStlye, onClick, isVisible }) => {
  return (
    <>
      {isVisible ? (
        <Button
        customStlye = {customStlye}
          onClick={onClick}
          style={{ width: "100%", maxWidth: "500px" }}
          buttonLabel={buttonLabel}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default ButtonPega;
