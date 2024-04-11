import React from "react";

import './forgotSomething.scss'
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ForgotSomething = (props) => {

    const company = props.selectedCompany;
    console.log(company.name)
    const icon = company.icon1 !== '' ? <FontAwesomeIcon icon={company.icon1} /> : null;
    const spacing = icon ? <span className="spacing">   </span> :"";
 

   /**
 * Comments:
 * FS = FogortSomething for CSS classes
 */
  return (
    <div className={`contentFS_${company.name}`}>

        {company.loginForgotName     !== '' ? <div><a className={`aFS_${company.name}`} href="/">{icon}{spacing}{company.loginForgotName}    </a></div> : '' }
        {company.loginForgotPassword !== '' ? <div><a className={`aFS_${company.name}`} href="/">{icon}{spacing}{company.loginForgotPassword}</a></div> : '' }
        {company.loginHelp           !== '' ? <div><a className={`aFS_${company.name}`} href="/">{icon}{spacing}{company.loginHelp}          </a></div> : '' }
       
        
  
    </div>
  );
};

export default ForgotSomething;
