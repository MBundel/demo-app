import React from "react";
import './loginButton.scss';
import { Link } from 'react-router-dom';

const LoginButton = (props) => {
  const firm = props.selectedFirm;

  return (
    <div className={`contentLB_${firm.name}`}>
   
      {/* type:"submit" */}
      <Link style={{width:"0"}} to="/pega" ><button className={`buttonLogin_${firm.name}`}>{firm.loginButtonStart} </button></Link>
    </div>
  );
};

export default LoginButton;
