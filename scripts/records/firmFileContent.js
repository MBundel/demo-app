module.exports = (folderName) => {
  return {
    buttonContent: `
    @forward "./colorScheme.scss";
    @mixin button_default {
      color: $${folderName}Grey;
      font-size: 15px;
      font-weight: 900;
      font-family: inherit;
      text-transform: uppercase;
      letter-spacing: 2px;
      border: none;
      border-radius: 5px 0 0 5px  ;
      padding: 5px 5px;
      width: 200px;
      height: 45px;
      margin: 10px auto;
      justify-content: center;
      cursor: pointer;
    
      @media screen and (max-width:768px) {
        // min-width: 220px;
      }
    
      &:hover {
        background-color: $${folderName}White;
        color: $${folderName}Blue;
      }
    }
    
    @mixin button_regular {
      @include button_default;
      background-color: $${folderName}Blue;
     
    }
    
    @mixin button_strong {
      @include button_default;
      background-color: $${folderName}Yellow;
      width: auto;
     
    }
    
    @mixin button_deactivated {
      @include button_default;
      background-color: $${folderName}Grey;  
    }
    
    @mixin buttonLogin{
      @include button_regular;
    }
    @mixin buttonNewReg{
      @include button_regular;
    }
    `,

    colorSchemeContent: `
$${folderName}Blue:             #7C90DB;
$${folderName}LightBlue:        #EEF2FA;
$${folderName}White:            #FFFFFF;
$${folderName}Grey:             #A8AEC1;
$${folderName}DarkGrey:         #646875;
$${folderName}Green:            #008000;
$${folderName}LightGreen:       #91F5AD;
$${folderName}Red:              #D56062;
$${folderName}LightRed:         #FFA07A;
$${folderName}Yellow:           #ECC30B;
$${folderName}LightYellow:      #FFFFE0;
$${folderName}Purple:           #51344D;
$${folderName}LightPurple:      #700548;
$${folderName}Pink:             #D81159;
$${folderName}LightPink:        #FFD3DA;
$${folderName}Black:            #0D160B;
`,

    containerContent: `
    @forward "./colorScheme.scss";
    @mixin mainLoginContent{
      color: $${folderName}DarkGrey;
      font-family: "Segoe UI", "Roboto", Helvetica, Arial, serif;
      background-color: $${folderName}White;
      justify-content: space-between;
      box-shadow: 1px 1px 5px -4.5px #333333;
  
  }
  
  @mixin pega_container{
      background-color: $${folderName}White;
  }
    `,

    generalContent: `
    @forward "./colorScheme.scss";
    @mixin a{

      & a:visited {
           color: $${folderName}Blue;
         }
     }
  
  
  @mixin style_default{
      @include a;
      color: $${folderName}White;
      background-color: $${folderName}Grey;
      padding-bottom: 350px;
      font-size:  20px ;
     
      font-family: "Calibri", sans-serif;
  
      
  }
    `,

    styleContent: `
@import "./button";
@import "./container";
@import "./general";`,
  };
};
