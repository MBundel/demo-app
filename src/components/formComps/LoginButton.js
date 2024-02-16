import React from "react";
import '../../styles/loginComponents/loginButton.scss';
import { Link } from 'react-router-dom';

const LoginButton = (props) => {
  const firm = props.selectedFirm;

  return (
    <div className={`contentLB_${firm.name}`}>
      {/* <a href="http://localhost:63342/uniqa/login.html?_ijt=jhrk1fbj6puh28jtgc06usn16a&_ij_reload=RELOAD_ON_SAVE">
        <p className="button-strong">Anmelden</p>
      </a> */}

      {/* type:"submit" !!*/}
      <Link to="/pega" ><input className={`buttonLogin_${firm.name}`}  value={firm.loginButtonStart} /></Link>
    </div>
  );
};

export default LoginButton;
