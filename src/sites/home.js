import React from "react";
import { uniqa, allianz, zurich } from "../records/insuranceFirms";
import image from '../assets/background.PNG';

function Home({ selectedFirmName }) {

  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;
  const firm = firms[seF];

  return (
   <>
     
    <div style={{display:"flex", justifyContent "center"}}>

      <h1>Willkommen bei der  {firm.name}</h1>

    </div>



     {/* <img 
  src={image} 
  className="placeholderIMG" 
  alt="contentPlaceholder" 
  style={{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '43%'
  }}
/> */}

    </>
  );
}

export default Home;