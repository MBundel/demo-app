import React, { useEffect, useState } from "react";
import "../styles/pega.scss";
import "../styles/loginComponents/loginButton.scss";
import { uniqa, allianz, zurich } from "../records/insuranceFirms";
const Pega = ({ selectedFirmName }) => {
  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;
  const firm = firms[seF];

  const [isVisible, setIsVisible] = useState(true);

  const handleView = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://release.constellation.pega.io/8.23.1-266/react/prod/pega-embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`pega_container_${firm.name}`}>
      <div className="pega_content">
        {isVisible ? (
          <button className={`buttonLogin_${firm.name}`} onClick={handleView}>
            Schadensfall starten
          </button>
        ) : (
          <pega-embed
            id="theEmbed"
            action="createCase"
            caseTypeID="Org-CRMInsurance-Work-Schaden"
            casePage="assignment"
            appAlias={firm.pegaAppAlias}
            pegaServerUrl="https://4wvlxocw.pegace.net/prweb/"
            staticContentUrl="https://release.constellation.pega.io/8.23.1-266/react/prod/"
            authService="pega"
            clientId={firm.clientId}
            // deferLoad="true"  uID: A4556666  PW: UGVnYTEyMzQh
            userIdentifier="D1234467"
            password="UGVnYTEyMyE="
            assignmentHeader="false"
            style={{ width: "100%" }}
            theme='{
              "components": {
              "link": {
                  "color": "#005CA9",
                  "font-size": "17px"
                },
                "button": {
                  "background": "#ffffff",
                  "border-radius": "0.375",
                  "secondary-color": "#ffffff"
                  
                  
                
                  
                },
                "radio-check": {
                  "border-color": "#00588E",
                  "background-color": "#FFFFFF",
                  "foreground-color": "#FFFFFF",
                  "border-width": "0.1rem",
                  "size":"1rem"
                },
                "radio-button": {
                  "height":"1rem",
                  "width":"1rem"
                }
              },
            "base": {
              "palette": {
                "brand-primary": "#00337F"
              },
                "font-family": "Calibri,Sans-serif,Serif,Monospace",
                "font-size": "17px"
           
              }
            }'
          ></pega-embed>
        )}
      </div>
    </div>
  );
};

export default Pega;
