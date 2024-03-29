import React from "react";

import './forgotSomething.scss'
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ForgotSomething = (props) => {

    const firm = props.selectedFirm;
    console.log(firm.name)
    const icon = firm.icon1 !== '' ? <FontAwesomeIcon icon={firm.icon1} /> : null;
    const spacing = icon ? <span className="spacing">   </span> :"";
 

   /**
 * Comments:
 * FS = FogortSomething for CSS classes
 */
  return (
    <div className={`contentFS_${firm.name}`}>

        {firm.loginForgotName     !== '' ? <div><a className={`aFS_${firm.name}`} href="/">{icon}{spacing}{firm.loginForgotName}    </a></div> : '' }
        {firm.loginForgotPassword !== '' ? <div><a className={`aFS_${firm.name}`} href="/">{icon}{spacing}{firm.loginForgotPassword}</a></div> : '' }
        {firm.loginHelp           !== '' ? <div><a className={`aFS_${firm.name}`} href="/">{icon}{spacing}{firm.loginHelp}          </a></div> : '' }
       
        
  
    </div>
  );
};

export default ForgotSomething;
