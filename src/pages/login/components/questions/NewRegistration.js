import React from 'react'
import './newRegistration.scss'

const NewRegistration = (props) => {

    const firm = props.selectedFirm;

    const designs = {
        designButton:  <button className={`buttonNewReg_${firm.name}`}>{firm.loginNewMemberButton}</button>,
        designLink:  <a href='/'> {firm.loginNewMemberButton}</a>
    }
    
  return (
    <div className={`contentNR_${firm.name}`}>
           

        <p>{firm.loginNewMemberLabel} &nbsp;</p> 
      {designs[firm.newRegDesign]}
      


    </div>
  )
}

export default NewRegistration