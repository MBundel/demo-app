import React from "react";

const PegaEmbed = ({
  pegaAction,
  firm,
  pegaAppAlias,
  clientId,
  theme,
  isVisible,
}) => {

  console.log(
    'pegaAction: ', pegaAction,
    
    'pegaAppAlias: ', firm.pegaAppAlias,
    'clientId: ', firm.clientId,
    'theme: ', firm.theme,
    'isVisible: ', isVisible
);
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
          assignmentHeader="false"
          style={{ width: "700px",maxWidth: "100%" , height: "1300px" }}
          theme={firm.theme}
        ></pega-embed>
      ) : (
        ""
      )}
    </div>
  );
};

export default PegaEmbed;
