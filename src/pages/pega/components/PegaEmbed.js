import React, {useState, useEffect} from "react";

const PegaEmbed = ({ pegaAction, company, isVisible, isDevVersion }) => {




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

  };

  return (
    <div>
      {isVisible ? (
        <pega-embed
          id="theEmbed"
          action={pegaAction}
          caseTypeID="Org-CRMInsurance-Work-Schaden"
          assignmentID="ASSIGN-WORKLIST ORG-CRMINSURANCE-WORK S-18058!SCHADENMELDEN"
          casePage="assignment"
          pageID="pyWorklist"
          pageClass="Data-Portal"
          appAlias={company.pegaAppAlias}
          pegaServerUrl="https://senacor01.pegalabs.io/prweb/"
          staticContentUrl="https://release.constellation.pega.io/8.23.1-266/react/prod/"
          authService="pega"
          clientId={company.clientId}
          deferLoad="false"
          userIdentifier="ZU864428"
          password="UGVnYVByYWN0aWNlMTIzNCE="
          assignmentHeader={isDevVersion}
          style={{ width: responsiveness.width}}
          theme={company.theme}
        ></pega-embed>
        
      ) : (
        ""
      )}
    </div>
 
  );
};

export default PegaEmbed;
