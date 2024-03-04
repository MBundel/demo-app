import React from 'react'
import "./loginInput.scss";

const LoginInput = (props) => {

    const selectedFirm = props.selectedFirm;

    const showPassword = () => {
        // Ihre Funktion zum Anzeigen des Passworts
      }
  return (
    <div className={`input_${selectedFirm.name}`} >
        
        <label htmlFor="txtUserID">{selectedFirm.loginLabelUser}</label>
          <input placeholder={selectedFirm.loginPlaceholderUser} type="text" id="txtUserID" name="UserIdentifier"  required />
          <br /><br />
          <label htmlFor="txtPassword">{selectedFirm.loginLabelPassword}</label>
          <input placeholder={selectedFirm.loginPlaceholderPassword} type="password" id="txtPassword" name="Password"  required />
          <span 
          onClick={showPassword} className="password-toggle-icon">
            <i className="fas fa-eye"></i>
          </span>


    </div>
  )
}

export default LoginInput