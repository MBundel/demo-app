import React, { useEffect, useState } from "react";
import * as companies from "../../records/companies";

import PegaEmbed from "./components/PegaEmbed";
import ButtonPega from "./components/ButtonPega";
import InfoMessagePega from "./components/InfoMessagePega";

import "./pega.scss";
import Switch from "../../components/controls/Switch";


const Pega = ({ selectedCompanyName }) => {
  //-------------------------------------------- field definitions --------------------------------------------------------

  const [pegaAction, setPegaAction] = useState(""); // "createCase" || "openCase" || "openPage"
  const [message, setMessage] = useState(
    "Hallo Frau Wolke. Wie können wir behilflich sein?"
  );
  const [isDevVersion, setIsDevVersion] = useState(false);
  const [isVisible, setIsVisible] = useState({
    startButton: true,
    openButton: true,
    closeButton: false,
    infoMessage: true,
    pegaEmbed: false,
  });


  
  const company = companies[selectedCompanyName];

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
  const handleSwitchClick = () =>{
    setIsDevVersion(!isDevVersion);
    console.log(`Checkbox is checked: ${!isDevVersion}`);
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
      <div className={`pega_container_${company.name} pega_defaultContainer`}>
          <Switch
          position="fixed_right"
          onClick={handleSwitchClick}
          />





        <div className="pega_content">
          
          <InfoMessagePega
            isVisible={isVisible.infoMessage}
            message={message}
          />
          <ButtonPega
            customStlye={company.name}
            onClick={pressStartButton}
            buttonLabel="Neuen Schadensfall starten"
            isVisible={isVisible.startButton}
          />
          <ButtonPega
            customStlye={company.name}
            onClick={pressContinueButton}
            buttonLabel="Bisherigen Schadensfall weiterbearbeiten"
            isVisible={isVisible.openButton}
          />

          <PegaEmbed
            isVisible={isVisible.pegaEmbed}
            company={company}
            pegaAction={pegaAction}
            isDevVersion = {isDevVersion}
          />

          <ButtonPega
            customStlye={company.name}
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
