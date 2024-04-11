import React from 'react'
import './newRegistration.scss'

const NewRegistration = (props) => {

    const company = props.selectedCompany;

    const designs = {
        designButton:  <button className={`buttonNewReg_${company.name}`}>{company.loginNewMemberButton}</button>,
        designLink:  <a href='/'> {company.loginNewMemberButton}</a>
    }
    
  return (
    <div className={`contentNR_${company.name}`}>
           

        <p>{company.loginNewMemberLabel} &nbsp;</p> 
      {designs[company.newRegDesign]}
      


    </div>
  )
}

export default NewRegistration