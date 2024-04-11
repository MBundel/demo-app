const inquirer = require("inquirer");
const fs = require("fs").promises;
const { companies } = require("./records/companies.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Wie soll die Firma heißen?",
    },
  ])
  .then(async (answers) => {
    const companyName = formatFileName(answers.name);
    const folderPath = `src/styles/${companyName}`;
    const fileNameToContent = importFileContent(companyName);
    // createScssFiles(fileNameToContent, folderPath);
    // updateCompaniesList(companies, companyName);
    updateCompaniesAttributes(companyName);
    updateAppScss(companies);
  })
  .catch((error) => {
    creatingFolderFailedErrorMessage(error);
  });

// ---------- CLEAN CODE FUNCTIONS ---------

// --------------------
const formatFileName = (companyName) => {
  return companyName
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s(\w)/g, (match) => match.toUpperCase())
    .replace(/[\s\W]/g, "");
};

// --------------------

const updateAppScss = async (companies) => {
  console.log("src/style/app.scss wird geupdatet.");
  const appScss = "src/styles/app.scss";
  const content = buildAppSccFileContent(companies);
  try {
    await fs.writeFile(appScss, content);
    console.log(`Eine neue Zeile wurde zur Datei ${appScss} hinzugefügt.`);
  } catch (err) {
    console.error(err);
  }
};

// --------------------

const updateCompaniesList = async (companies, companyName) => {
  await companies.push(companyName);
  const companyRecordFile = "scripts/records/companies.js";
  const updatedCompaniesList = `module.exports.companies = ${JSON.stringify(
    companies
  )};`;
  try {
    await fs.writeFile(companyRecordFile, updatedCompaniesList);
    console.log(`${companyName} hinzugefügt.`);
  } catch (err) {
    console.error(err);
  }
};

// -------------------

const updateCompaniesAttributes = async (companyName) => {
  const companyRecordFile = "src/records/companies.js";  
  const updatedCompany = createCompanyObj(companyName);
  try {
     let data = await fs.readFile(companyRecordFile, 'utf8')
    await fs.writeFile(companyRecordFile, data + updatedCompany, 'utf8');
    console.log(`${companyName} hinzugefügt.`);
  } catch (err) {
    console.error(err);
  }
};


// -------------------

const importFileContent = (companyName) => {
  const contentModule = require("./records/companyFileContent.js")(companyName);
  const files = ["button", "colorScheme", "container", "general", "style"];
  const fileNameToContent = files.reduce((obj, file) => {
    obj[`_${file}.scss`] = contentModule[`${file}Content`];
    return obj;
  }, {});

  return fileNameToContent;
};

// ----------------

const createScssFiles = (fileNameToContent, folderPath) => {
  fs.access(folderPath)
    .then(async () => {
      console.log(`Das Verzeichnis ${folderPath} existiert bereits.`);
    })
    .catch(async () => {
      await fs.mkdir(folderPath, { recursive: true });
      for (let file in fileNameToContent) {
        const content = fileNameToContent[file];
        await fs.writeFile(`${folderPath}/${file}`, content);
        console.log(`${file} wurde erfolgreich erstellt.`);
      }
      console.log(
        `Alles erledigt! Ordner ${folderPath} wurde mit SCSS-Dateien erstellt.`
      );
    });
};

// ----------------

const buildAppSccFileContent = (companies) => {
  let useAsLines = "";
  let generalCssLines = `html, \nbody { \n\t margin: 0; \n\t padding: 0; \n \n\ta { \n\t\t text-decoration: none; \n\t } \n}\n`;
  let cssClasses = [
    ".app",
    ".buttonNewReg",
    ".buttonLogin",
    ".mainLoginContent",
  ];
  let classesBuild = "";

  companies.forEach((company) => {
    useAsLines += `@use "./${company}/style" as ${company};\n`;
  });
  useAsLines += `\n`;

  cssClasses.forEach((cssClass) => {
    classesBuild += `${cssClass} {\n`;
    companies.forEach((company) => {
      classesBuild += `\t&_${company} {\n\t\t @include ${company}${cssClass}; \n\t } \n`;
    });
    classesBuild += `}\n`;
  });
  const content = useAsLines + generalCssLines + classesBuild;
  return content;
};

// --------------- ERROR MESSAGES --------

const creatingFolderFailedErrorMessage = (error) => {
  console.error("Konnte Ordner / Dateien nicht erstellen:", error);
};

// ----------------

const createCompanyObj = ( companyName) =>{
  const randomID = Math.floor(Math.random() * (1000 - 5 + 1)) + 5;
return (
 `export const ${companyName} = {
  id: ${randomID},
  name: '${companyName}',
  fullName: '${companyName} Versicherung',
  loginLabelUser: '',
  loginPlaceholderUser: 'Benutzername',
  loginLabelPassword: '',
  loginPlaceholderPassword: 'Passwort',
  loginButtonStart: 'Jetzt anmelden',
  loginForgotName: 'Benutzername vergessen?',
  loginForgotPassword: 'Passwort neu vergeben?',
  loginHelp: '',
  loginNewMemberLabel: 'Noch kein ${companyName}-Konto?',
  loginNewMemberButton: 'Registrieren',
  imageSrc: "https://siderite.dev/Posts/files/placeholder.com-logo1_637146769278368505.jpg",
  icon1 : '',
  newRegDesign: 'designButton',
  loginDesignOrder: ["FormHeader", "LoginInput", "LoginButton", "NewRegistration", "ForgotSomething"],
  pegaAppAlias: "z-claim",
  clientId:"67345646815270313102",
  theme: theme.regular
}
`)
}