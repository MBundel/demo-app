import React from "react";
import * as firms from "../../records/insuranceFirms";

function Home({ selectedFirmName }) {

 
  const seF = selectedFirmName;
  const firm = firms[seF];
  const name = firm.fullName

  return (
   <>
    <div style={{display:"flex", justifyContent: "center",  flexDirection:"column", lineHeight: "2", textAlign: "center", padding: "20px"}}>

      <h1>Willkommen bei der {name}</h1>

      <img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width: "100%", maxWidth:"1200px",  height:"auto", margin: "auto"}} alt="Hände mit Versicherungen"/>

    </div>
   </>
  );
}




export default Home;