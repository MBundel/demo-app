import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import *  as theme from "./pegatheme.js";

export const allianz = {
    id: 1,
    name: 'allianz',
    loginLabelUser: 'Benutzername',
    loginPlaceholderUser: 'Benutzername',
    loginLabelPassword: 'Passwort',
    loginPlaceholderPassword: 'Passwort',
    loginButtonStart: 'Anmelden',
    loginForgotName: 'Benutzernamen vergessen',
    loginForgotPassword: 'Passwort vergessen',
    loginHelp: 'Hilfe bei der Anmeldung',
    loginNewMemberLabel: 'Neues Benutzerkonto anlegen:',
    loginNewMemberButton: 'Hier registrieren',
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Allianz.svg/2560px-Allianz.svg.png",
    icon1: faArrowRight,
    newRegDesign: "designLink",
    loginDesignOrder: ["FormHeader", "LoginInput", "ForgotSomething", "LoginButton", "NewRegistration"],
    pegaAppAlias: "a-claim",
    clientId:"13322926513876424761",
    theme: theme.allianz
}
export const uniqa = {
    id: 2,
    name: 'uniqa',
    loginLabelUser: 'myUNIQA Kennung',
    loginPlaceholderUser: '',
    loginLabelPassword: 'Passwort',
    loginPlaceholderPassword: '',
    loginButtonStart: 'Anmelden',
    loginForgotName: 'myUNIQA Kennung vergessen?',
    loginForgotPassword: 'Passwort vergessen?',
    loginHelp: '',
    loginNewMemberLabel: 'Noch kein myUNIQA Konto?',
    loginNewMemberButton: 'Neues Konto erstellen',
    imageSrc: "https://www.uniqagroup.com/grp/newsroom/UNIQA_mainlogo_blue_V1_4c.png",
    icon1 : "",
    newRegDesign: "designButton",
    loginDesignOrder: ["FormHeader", "LoginInput", "LoginButton", "ForgotSomething", "NewRegistration"],
    pegaAppAlias: "u-claim",
    clientId:"20004324912556845037",
    theme: theme.uniqa
}
export const zurich = {
    id: 3,
    name: 'zurich',
    loginLabelUser: '',
    loginPlaceholderUser: 'Benutzername',
    loginLabelPassword: '',
    loginPlaceholderPassword: 'Passwort',
    loginButtonStart: 'Jetzt anmelden',
    loginForgotName: 'Benutzername vergessen',
    loginForgotPassword: 'Passwort neu vergeben',
    loginHelp: '',
    loginNewMemberLabel: 'Registrieren: \nSie sind Kunde und haben noch keinen Zugang zu Meine Zurich?',
    loginNewMemberButton: 'Jetzt registrieren',
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Zurich_Insurance_Group_Logo_Horizontal.svg/1200px-Zurich_Insurance_Group_Logo_Horizontal.svg.png",
    icon1 : faChevronRight,
    newRegDesign: 'designButton',
    loginDesignOrder: ["FormHeader", "LoginInput", "ForgotSomething", "LoginButton", "NewRegistration"],
    pegaAppAlias: "z-claim",
    clientId:"67345646815270313102",
    theme: theme.zurich
}

