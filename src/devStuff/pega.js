<pega-embed
id="theEmbed"
action={pegaAction}
caseTypeID="Org-CRMInsurance-Work-Schaden"
caseID = {pegaAction === "createCase" ? "" : caseID}
assignmentID="ASSIGN-WORKLIST ORG-CRMINSURANCE-WORK S-18058!SCHADENMELDEN"
casePage="assignment"
appAlias={firm.pegaAppAlias}
pegaServerUrl="https://4wvlxocw.pegace.net/prweb/"
staticContentUrl="https://release.constellation.pega.io/8.23.1-266/react/prod/"
authService="pega"
clientId={firm.clientId}
// clientId="23479118762171457969"
deferLoad="false"
userIdentifier="AL864428"
password="UGVnYTEyMzQ1IQ=="
assignmentHeader="true"
style={{ width: "700px", height: "500px" }}
theme={firm.theme}
></pega-embed>
<p>---------------------------------------------------------</p>
<pega-embed
id="theEmbed"
action="openPage"
pageID="pyWorklist"
pageClass="Data-Portal"
casePage="assignment"
assignmentHeader="false"
appAlias="a-claim"
pegaServerUrl="https://4wvlxocw.pegace.net/prweb/"
staticContentUrl="https://release.constellation.pega.io/8.23.1-266/react/prod/"
authService="pega"
clientId="23479118762171457969"
userIdentifier="AL864428"
password="UGVnYTEyMzQ1IQ=="
style={{ width: "700px", height: "500px" }}
>
</pega-embed>