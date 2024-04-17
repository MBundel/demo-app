import React from "react";

import FormHeader from "./components/FormHeader";
import ForgotSomething from "./components/questions/ForgotSomething";
import NewRegistration from "./components/questions/NewRegistration";
import LoginInput from "./components/LoginInput";
import LoginButton from "./components/LoginButton";

import * as companies from "../../records/companies";

import "./login.scss";

const Login = ({ selectedCompanyName }) => {
  const sendLoginRequestForm = (e) => {
    e.preventDefault();
  };

  // -------------------------------------------------------------
  const selectedCompany = companies[selectedCompanyName];
  // -------------------------------------------------------------

  const components = {
    FormHeader:       <FormHeader selectedCompany={selectedCompany} />,
    LoginInput:       <LoginInput selectedCompany={selectedCompany} />,
    ForgotSomething:  <ForgotSomething selectedCompany={selectedCompany} />,
    LoginButton:      <LoginButton selectedCompany={selectedCompany} />,
    NewRegistration:  <NewRegistration selectedCompany={selectedCompany} />,
  };
  const order = selectedCompany.loginDesignOrder;

  return (
    <div>
      <div className={`mainLoginContent_${selectedCompany.name} mainLoginDefault`}>
        <form
          name="main"
          id="pegaLogin"
          method="post"
          onSubmit={sendLoginRequestForm}
          action="https://4wvlxocw.pegace.net/prweb/PRAuth/app/u-claim/pega/"
          noValidate
          target="_blank"
        >
          <form>
            {order.map((component) => components[component])}</form>
        </form>
      </div>
    </div>
  );
};

export default Login;
