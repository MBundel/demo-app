import React from 'react'
import UniqaFH from './headers/UniqaFH';
import AllianzFH from './headers/AllianzFH';
import ZurichFH from './headers/ZurichFH';
import SenacorFH from './headers/SenacorFH';


const FormHeader = (props) => {
    const company = props.selectedCompany;
  return (
    <div>
        
         {company.name==='uniqa'   ? <UniqaFH/>    : ''} 
         {company.name==='allianz' ? <AllianzFH/>  : ''} 
         {company.name==='zurich'  ? <ZurichFH/>   : ''} 
         {company.name==='senacor' ? <SenacorFH/>  : ''} 

         
    </div>
  )
}

export default FormHeader