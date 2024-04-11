import React from "react";
import './loginButton.scss';
import { Link } from 'react-router-dom';

const LoginButton = (props) => {
  const company = props.selectedCompany;

  return (
    <div className={`contentLB_${company.name}`}>
   
      {/* type:"submit" */}
      <Link style={{width:"0"}} to="/pega" ><button className={`buttonLogin_${company.name}`}>{company.loginButtonStart} </button></Link>
    </div>
  );
};

export default LoginButton;
