import React from "react";

const InfoMessagePega = ({ message, isVisible }) => {
  return (
    <>
      {isVisible ? (
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <h2>{message} </h2>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default InfoMessagePega;
