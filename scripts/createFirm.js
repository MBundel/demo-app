const inquirer = require("inquirer");
const fs = require("fs").promises;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Wie soll die Firma heißen?",
    },
  ])
  .then(async (answers) => {
    const folderName = formatFileName(answers.name);
    const folderPath = `src/styles/${folderName}`;
    const {
      buttonContent,
      colorSchemeContent,
      containerContent,
      generalContent,
      styleContent,
    } = require("./records/firmFileContent.js")(folderName);

    const fileNameToContent = {
      "_button.scss": buttonContent,
      "_colorScheme.scss": colorSchemeContent,
      "_container.scss": containerContent,
      "_general.scss": generalContent,
      "_style.scss": styleContent,
    };

    fs.access(folderPath)
        .then(async () => {
            // Ordner existiert bereits
        })
        .catch(async () => {
          // Ordner existiert nicht, erstelle ihn
          await fs.mkdir(folderPath, { recursive: true });

          for (let file in fileNameToContent) {
            const content = fileNameToContent[file];
            await fs.writeFile(`${folderPath}/${file}`, content);
            console.log(`${file} wurde erfolgreich erstellt.`);
          }

          console.log(
            `Alles erledigt! Ordner ${folderPath} wurde mit SCSS-Dateien erstellt.`
          );
          addScssImport(folderName);
        });
  })
  .catch((error) => {
    console.error("Konnte Ordner / Dateien nicht erstellen:", error);
  });

const formatFileName = (name) =>
  name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s(\w)/g, (match) => match.toUpperCase())
    .replace(/[\s\W]/g, "");

const addScssImport = async (companyName) => {
  const scssFile = "src/styles/app.scss";
  const importLine = `@use "./${companyName}/style" as ${companyName};\n`;

  try {
    const data = await fs.readFile(scssFile, "utf8");
    await fs.writeFile(scssFile, importLine + data);
    console.log(`Eine neue Zeile wurde zur Datei ${scssFile} hinzugefügt.`);
  } catch (err) {
    console.error(err);
  }
};