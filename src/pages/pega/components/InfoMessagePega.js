import React from "react";

const InfoMessagePega = ({ message, isVisible }) => {
  return <>{isVisible ? <h2 style={{lineHeight: "1"}}>{message} </h2> : ""}</>;
};

export default InfoMessagePega;
