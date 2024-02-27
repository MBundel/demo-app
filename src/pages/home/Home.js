import React from "react";
import { uniqa, allianz, zurich } from "../../records/insuranceFirms";


function Home({ selectedFirmName }) {

  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;
  const firm = firms[seF];

  return (
   <>
     
    <div style={{display:"flex", justifyContent: "center",  flexDirection:"column", lineHeight: "2", textAlign: "center", padding: "20px"}}>

      <h1>Willkommen bei der {firm.name}</h1>

      <img src="https://www.fondsprofessionell.de/content/fpim/uploads/news/0/b/d/1600948109_versicherung.jpg" style={{width: "100%", maxWidth:"1200px",  height:"auto", margin: "auto"}} alt="Hände mit Versicherungen"/>

    </div>





    </>
  );
}

export default Home;