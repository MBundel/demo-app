import React from "react";

import FormHeader from "./components/FormHeader";
import ForgotSomething from "./components/questions/ForgotSomething";
import NewRegistration from "./components/questions/NewRegistration";
import LoginInput from "./components/LoginInput";
import LoginButton from "./components/LoginButton";

import * as firms from "../../records/insuranceFirms";

import "./login.scss";

const Login = ({selectedFirmName}) => {

  
  const sendLoginRequestForm = (e) => {
    e.preventDefault();
    
  };




  // -------------------------------------------------------------
  const selectedFirm = firms[selectedFirmName];
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
