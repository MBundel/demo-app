import React, {useState, useEffect} from "react";

const PegaEmbed = ({ pegaAction, firm, isVisible, isDevVersion }) => {




  // this BS L9-L32, because pega is unable to get maxWidth: "100%";
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        // height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const responsiveness = {
    width: windowSize.width < 700 ? '100%' :  '700px', 
    // height: windowSize.height < 700 ? '100%' :  '500px'
  };

  return (
    <div>
      {isVisible ? (
        <pega-embed
          id="theEmbed"
          action={pegaAction}
          caseTypeID="Org-CRMInsurance-Work-Schaden"
          // caseID={pegaAction === "createCase" ? "" : caseID}
          assignmentID="ASSIGN-WORKLIST ORG-CRMINSURANCE-WORK S-18058!SCHADENMELDEN"
          casePage="assignment"
          pageID="pyWorklist"
          pageClass="Data-Portal"
          appAlias={firm.pegaAppAlias}
          pegaServerUrl="https://4wvlxocw.pegace.net/prweb/"
          staticContentUrl="https://release.constellation.pega.io/8.23.1-266/react/prod/"
          authService="pega"
          clientId={firm.clientId}
          // clientId="23479118762171457969"
          deferLoad="false"
          // userIdentifier="AL864428"
          // password="UGVnYTEyMzQ1IQ=="
          userIdentifier="ZU864428"
          password="UGVnYTEyMzQ1IQ=="
          assignmentHeader={isDevVersion}
          style={{ width: responsiveness.width}}
          theme={firm.theme}
        ></pega-embed>
        
      ) : (
        ""
      )}
    </div>
  );
};

export default PegaEmbed;
