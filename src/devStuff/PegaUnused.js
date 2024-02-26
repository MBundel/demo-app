import React, { useEffect } from "react";



function Pega() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://release.constellation.pega.io/8.23.1-266/react/prod/pega-embed.js';
    script.async = true;
    document.body.appendChild(script);
  },[])

  return (
   <>
      <div className="content">
        {/* <pega-embed id='theEmbed' action='createCase' caseTypeID='Org-CRMInsurance-Work-Schaden' casePage='assignment'
                appAlias='u-claim' pegaServerUrl='https://4wvlxocw.pegace.net/prweb/'
                staticContentUrl='https://release.constellation.pega.io/8.23.1-266/react/prod/' authService='pega'
                clientId='20004324912556845037' style='width:100%'>
        </pega-embed> */}
      </div>
    </>
  );
}

export default Pega;