import React from "react";
import { uniqa, allianz, zurich } from "../../records/insuranceFirms";


function Home({ selectedFirmName }) {

  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;
  const firm = firms[seF];

  return (
   <>
     
    <div style={{display:"flex", justifyContent: "center",  lineHeight: "2", textAlign: "center", padding: "20px"}}>

      <h1>Willkommen bei der {firm.name}</h1>

    </div>





    </>
  );
}

export default Home;