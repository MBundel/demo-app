import React from 'react'
import UniqaFH from './headers/UniqaFH';
import AllianzFH from './headers/AllianzFH';
import ZurichFH from './headers/ZurichFH';
import SenacorFH from './headers/SenacorFH';


const FormHeader = (props) => {
    const firm = props.selectedFirm;
  return (
    <div>
        
         {firm.name==='uniqa'   ? <UniqaFH/>    : ''} 
         {firm.name==='allianz' ? <AllianzFH/>  : ''} 
         {firm.name==='zurich'  ? <ZurichFH/>   : ''} 
         {firm.name==='senacor' ? <SenacorFH/>  : ''} 

         
    </div>
  )
}

export default FormHeader