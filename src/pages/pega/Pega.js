import React, { useEffect, useState } from "react";
import { uniqa, allianz, zurich } from "../../records/insuranceFirms";

import PegaEmbed from "./components/PegaEmbed";
import ButtonPega from "./components/ButtonPega";
import InfoMessagePega from "./components/InfoMessagePega";

import "./pega.scss";


const Pega = ({ selectedFirmName }) => {
  //-------------------------------------------- field definitions --------------------------------------------------------

  const [pegaAction, setPegaAction] = useState(""); // "createCase" || "openCase" || "openPage"
  const [message, setMessage] = useState(
    "Hallo Frau Wolke. Wie können wir behilflich sein?"
  );
  const [isVisible, setIsVisible] = useState({
    startButton: true,
    openButton: true,
    closeButton: false,
    infoMessage: true,
    pegaEmbed: false,
  });

  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;
  const firm = firms[seF];

  //-------------------------------------------- function definitions --------------------------------------------------------

  const changeDefaultVisibility = () => {
    setIsVisible((prevState) => ({
      ...prevState,
      openButton: !prevState.openButton,
      startButton: !prevState.startButton,
      pegaEmbed: !prevState.pegaEmbed,
    }));
    setMessage("Kontaktieren Sie uns gerne bei Fragen.");
  };

  const pressStartButton = () => {
    changeDefaultVisibility();
    
    setPegaAction("createCase");
  };

  const pressContinueButton = () => {
    changeDefaultVisibility();
    setIsVisible((prevState) => ({
      ...prevState,
      closeButton: !prevState.closeButton,
    }));
    setPegaAction("getNextWork");
  };

  const pressStopButton = () =>{
    pressContinueButton();
   
  }

  //----

  //-------------------------------------------- useEffect --------------------------------------------------------

  useEffect(() => {
    const elEmbedding = document.getElementById("theEmbed");

    const handleEmbedProcessingEnd = () => {
      changeDefaultVisibility();
      setMessage("Schadensmeldung wurde erfolgreich abgeschickt.");
    };

    const handleEmbedEventCancel = () => {
      changeDefaultVisibility();
      setMessage("Der Vorgang wurde gespeichert.");
    };

    if (elEmbedding) {
      elEmbedding.addEventListener(
        "embedprocessingend",
        handleEmbedProcessingEnd
      );
      elEmbedding.addEventListener("embedeventcancel", handleEmbedEventCancel);

      return () => {
        elEmbedding.removeEventListener(
          "embedprocessingend",
          handleEmbedProcessingEnd
        );
        elEmbedding.removeEventListener(
          "embedeventcancel",
          handleEmbedEventCancel
        );
      };
    }
  }, [isVisible.pegaEmbed, setIsVisible]);

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
      <div className={`pega_container_${firm.name}`}>
        <div className="pega_content">
          
          <InfoMessagePega
            isVisible={isVisible.infoMessage}
            message={message}
          />
          <ButtonPega
            customStlye={firm.name}
            onClick={pressStartButton}
            buttonLabel="Neuen Schadensfall starten"
            isVisible={isVisible.startButton}
          />
          <ButtonPega
            customStlye={firm.name}
            onClick={pressContinueButton}
            buttonLabel="Bisherigen Schadensfall weiterbearbeiten"
            isVisible={isVisible.openButton}
          />

          <PegaEmbed
            isVisible={isVisible.pegaEmbed}
            firm={firm}
            pegaAction={pegaAction}
          />

          <ButtonPega
            customStlye={firm.name}
            onClick={pressStopButton}
            buttonLabel="Schadensliste schließen"
            isVisible={isVisible.closeButton}
          />
        </div>
      </div>
    </>
  );
};

export default Pega;
