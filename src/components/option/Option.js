import React, { useState } from "react";
import "./option.scss";

import * as importedCompanies from "../../records/companies";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Option = ({ handleSelectCompanyName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const companies = Object.values(importedCompanies);

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
          <p style={{ color: "black" }}>Login: ZU864428</p>

          


          {companies.map((company) => (
            <img
              key={company.name}
              alt={company.name}
              src={company.imageSrc}
              onClick={() => {handleSelectCompanyName(company.name);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Option;
