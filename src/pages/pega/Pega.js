import React, { useEffect, useState } from "react";
import "./pega.scss";
import "../../styles/loginComponents/loginButton.scss";
import "./pega.scss";
import { uniqa, allianz, zurich } from "../../records/insuranceFirms";
import PegaEmbed from "./components/PegaEmbed";
import ButtonPega from "./components/ButtonPega";
import InfoMessagePega from "./components/InfoMessagePega";

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

  const pressStartButton = () => {
    setIsVisible((prevState) => ({
      ...prevState,
      openButton: !prevState.openButton,
      startButton: !prevState.startButton,
      pegaEmbed: !prevState.pegaEmbed,
    }));
    setMessage("Kontaktieren Sie uns gerne bei Fragen.");
    setPegaAction("createCase");
  };

  //----
  const pressContinueButton = () => {
    setIsVisible((prevState) => ({
      ...prevState,
      openButton: !prevState.openButton,
      startButton: !prevState.startButton,
      pegaEmbed: !prevState.pegaEmbed,
      closeButton: !prevState.closeButton,
    }));

    setPegaAction("openPage");
  };

  //----

  //-------------------------------------------- useEffect --------------------------------------------------------

  useEffect(() => {
    const elEmbedding = document.getElementById("theEmbed");
    const events = ["embedprocessingend", "embedeventcancel"];

    if (elEmbedding) {
      events.forEach((event) =>
        elEmbedding.addEventListener(event, setIsVisible)
      );

      return () => {
        events.forEach((event) =>
          elEmbedding.removeEventListener(event, setIsVisible)
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
            buttonLabel="Bisherigen Schadensfalls weiterbearbeiten"
            isVisible={isVisible.openButton}
          />

          <PegaEmbed
            isVisible={isVisible.pegaEmbed}
            firm={firm}
            pegaAction={pegaAction}
          />

          <ButtonPega
            customStlye={firm.name}
            onClick={pressContinueButton}
            buttonLabel="Schadensliste schließen"
            isVisible={isVisible.closeButton}
          />
        </div>
      </div>
    </>
  );
};

export default Pega;
