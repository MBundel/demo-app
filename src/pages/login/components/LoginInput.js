import React from 'react'


const LoginInput = (props) => {

    const selectedCompany = props.selectedCompany;

    const showPassword = () => {
        // Ihre Funktion zum Anzeigen des Passworts
      }
  return (
    <div className={`input_${selectedCompany.name}`} >
        
        <label htmlFor="txtUserID">{selectedCompany.loginLabelUser}</label>
          <input placeholder={selectedCompany.loginPlaceholderUser} type="text" id="txtUserID" name="UserIdentifier"  required />
          <label htmlFor="txtPassword">{selectedCompany.loginLabelPassword}</label>
          <input placeholder={selectedCompany.loginPlaceholderPassword} type="password" id="txtPassword" name="Password"  required />
          <span 
          onClick={showPassword} className="password-toggle-icon">
            <i className="fas fa-eye"></i>
          </span>


    </div>
  )
}

export default LoginInput