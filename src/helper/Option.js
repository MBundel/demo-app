import React, { useState } from "react";
import "../styles/senacor/senacor.scss";
import * as insuranceFirms from "../records/insuranceFirms";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Option = ({ handleSelectFirmName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const firms = Object.values(insuranceFirms);

  const handleOpenOption = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`gearBox_${isOpen ? "open" : "closed"}`}
        onClick={handleOpenOption}
      >
        <FontAwesomeIcon icon={faGear} size="2xl" />
      </div>
      {isOpen && (
        <div className="optionBox">
          <p style={{ color: "black" }}>Login: A4556666</p>

          {firms.map((firm) => (
            <img
              key={firm.name}
              alt={firm.name}
              src={firm.imageSrc}
              onClick={() => {handleSelectFirmName(firm.name);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Option;
