import React from "react";
import "../styles/styleLogin.scss";
import "../styles/styles.scss";
import FormHeader from "../components/formComps/FormHeader";
// import { Link } from 'react-router-dom';

import { uniqa, allianz, zurich } from "../records/insuranceFirms";
import ForgotSomething from "../components/formComps/Questions/ForgotSomething";
import NewRegistration from "../components/formComps/Questions/NewRegistration";
import LoginInput from "../components/formComps/LoginInput";
import LoginButton from "../components/formComps/LoginButton";

const Login = ({selectedFirmName}) => {

  
  const sendLoginRequestForm = (e) => {
    e.preventDefault();
    // Ihre Funktion zum Senden des Formulars
  };

  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;


  // -------------------------------------------------------------
  const selectedFirm = firms[seF];
  // -------------------------------------------------------------

  const components = {
    FormHeader:       <FormHeader       selectedFirm={selectedFirm} />,
    LoginInput:       <LoginInput       selectedFirm={selectedFirm} />,
    ForgotSomething:  <ForgotSomething  selectedFirm={selectedFirm} />,
    LoginButton:      <LoginButton      selectedFirm={selectedFirm} />,
    NewRegistration:  <NewRegistration  selectedFirm={selectedFirm} />
  };
  const order = selectedFirm.loginDesignOrder;

  return (
    <div>
      <div className={`mainLoginContent_${selectedFirm.name}`}>
        <form
          name="main"
          id="pegaLogin"
          method="post"
          onSubmit={sendLoginRequestForm}
          action="https://4wvlxocw.pegace.net/prweb/PRAuth/app/u-claim/pega/"
          noValidate
          target="_blank"
        >
          <form>{order.map((component) => components[component])}</form>
        </form>
      </div>
    </div>
  );
};

export default Login;
