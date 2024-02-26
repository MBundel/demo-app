import React, { useEffect, useState } from "react";
import "../../styles/pega.scss";
import "../../styles/loginComponents/loginButton.scss";
import { uniqa, allianz, zurich } from "../../records/insuranceFirms";
import PegaEmbed from "./components/PegaEmbed";
import ButtonPega from "./components/ButtonPega";

const Pega = ({ selectedFirmName }) => {
  //-------------------------------------------- field definitions --------------------------------------------------------
  const [isPegaVisible, setIsPegaVisible] = useState(true);
  const [isEndVisible, setIsEndVisible] = useState(false);
  const [pegaAction, setPegaAction] = useState(""); // "createCase" || "openCase" || "openPage"
  const [caseID, setCaseID] = useState("S-18079");

  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;
  const firm = firms[seF];

  //-------------------------------------------- function definitions --------------------------------------------------------

  const pressStartButton = () => {
    setIsPegaVisible(!isPegaVisible);
    setPegaAction("createCase");
  };

  const pressContinueButton = () => {
    setIsPegaVisible(!isPegaVisible);
    setPegaAction("openPage");
  };

  const handleEndView = () => {
    setIsEndVisible(!isEndVisible);
    setIsPegaVisible(!isPegaVisible);
  };

  const consoleWarn = console.warn;

  console.warn = function (message) {
    if (message.indexOf("ResizeObserver") > -1) {
      // Pega Fehlermeldungen ausblenden
    } else {
      consoleWarn.apply(console, arguments);
    }
  };




  //-------------------------------------------- useEffect --------------------------------------------------------

  useEffect(() => {
    const elEmbedding = document.getElementById("theEmbed");
    const events = ["embedprocessingend", "embedeventcancel"];

    if (elEmbedding) {
      events.forEach((event) =>
        elEmbedding.addEventListener(event, handleEndView)
      );

      return () => {
        events.forEach((event) =>
          elEmbedding.removeEventListener(event, handleEndView)
        );
      };
    }
  }, [isPegaVisible, handleEndView]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://release.constellation.pega.io/8.23.1-266/react/prod/pega-embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  //--------------------------------------------JSX --------------------------------------------------------
  return (
    <>
      {isEndVisible ? (
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "100%",
            justifyContent: "center",
          }}
        >
          Ihr Antrag wurde erfolgreich abgeschickt
        </div>
      ) : (
        ""
      )}
      <div className={`pega_container_${firm.name}`}>
        <div className="pega_content">
          {isPegaVisible ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ButtonPega
                customStlye={firm.name}
                onClick={pressStartButton}
                buttonLabel = "Neuen Schadensfall starten"
                
              />
              <ButtonPega
                customStlye={firm.name}
                onClick={pressContinueButton}
                buttonLabel = " Bisherigen Schadensfalls weiterbearbeiten"                
              />
                
            
           
            </div>
          ) : (
              <PegaEmbed              
              pegaAction={pegaAction}              
              caseID = {pegaAction === "createCase" ? "" : caseID}              
              pegaAppAlias={firm.pegaAppAlias}              
              clientId={firm.clientId}
              theme={firm.theme}
              />
        
            
          )}
        </div>
      </div>
    </>
  );
};

export default Pega;
