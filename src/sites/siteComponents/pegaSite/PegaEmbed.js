import React from "react";

const PegaEmbed = ({ pegaAction, caseID, pegaAppAlias, clientId, theme }) => {
  console.log(`CHILD_pegaAction: ${pegaAction}`);
  console.log(`CHILD_caseID: ${pegaAction === "createCase" ? "" : caseID}`);
  console.log(`CHILD_appAlias: ${pegaAppAlias}`);
  console.log(`CHILD_clientId: ${clientId}`);
  console.log(`CHILD_theme: ${theme}`);

  return (
    <div>
      <pega-embed
        id="theEmbed"
        action={pegaAction}
        caseTypeID="Org-CRMInsurance-Work-Schaden"
        caseID={pegaAction === "createCase" ? "" : caseID}
        assignmentID="ASSIGN-WORKLIST ORG-CRMINSURANCE-WORK S-18058!SCHADENMELDEN"
        casePage="assignment"
        pageID="pyWorklist"
        pageClass="Data-Portal"
        appAlias={pegaAppAlias}
        pegaServerUrl="https://4wvlxocw.pegace.net/prweb/"
        staticContentUrl="https://release.constellation.pega.io/8.23.1-266/react/prod/"
        authService="pega"
        clientId={clientId}
        // clientId="23479118762171457969"
        deferLoad="false"
        userIdentifier="AL864428"
        password="UGVnYTEyMzQ1IQ=="
        assignmentHeader="false"
        style={{ width: "700px", height: "500px"}}
        theme={theme}
      ></pega-embed>


    </div>
  );
};

export default PegaEmbed;
