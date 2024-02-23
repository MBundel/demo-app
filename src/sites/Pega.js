import React, { useEffect, useState } from "react";
import "../styles/pega.scss";
import "../styles/loginComponents/loginButton.scss";
import { uniqa, allianz, zurich } from "../records/insuranceFirms";

const Pega = ({ selectedFirmName }) => {
  //-------------------------------------------- field definitions --------------------------------------------------------
  const [isPegaVisible, setIsPegaVisible] = useState(true);
  const [isEndVisible, setIsEndVisible] = useState(false);
  const [pegaAction, setPegaAction] = useState(""); // "createCase" || "openCase"
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
    setPegaAction("openCase");
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
              <button
                className={`buttonLogin_${firm.name}`}
                onClick={pressStartButton}
                value=""
              >
                Neuen Schadensfall starten
              </button>
              <button
                className={`buttonLogin_${firm.name}`}
                onClick={pressContinueButton}
                value=""
              >
                Bisherigen Schadensfalls weiterbearbeiten
              </button>
            </div>
          ) : (
        
            <pega-embed
              id="theEmbed"
              action={pegaAction}
              caseTypeID="Org-CRMInsurance-Work-Schaden"
              // caseID = {pegaAction === "createCase" ? "" : caseID}
              assignmentID="ASSIGN-WORKLIST ORG-CRMINSURANCE-WORK S-18058!SCHADENMELDEN"
              casePage="assignment"
              appAlias={firm.pegaAppAlias}
              pegaServerUrl="https://4wvlxocw.pegace.net/prweb/"
              staticContentUrl="https://release.constellation.pega.io/8.23.1-266/react/prod/"
              authService="pega"
              // clientId={firm.clientId}
              clientId="23479118762171457969"
              deferLoad="false"
              userIdentifier="AL864428"
              password="UGVnYTEyMzQ1IQ=="
              assignmentHeader="true"
              style={{ width: "700px", height: "500px" }}
              theme={firm.theme}
            ></pega-embed>
          )}
        </div>
      </div>
    </>
  );
};

export default Pega;
