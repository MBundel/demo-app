const inquirer = require('inquirer');
const fs = require('fs');
const { promisify } = require('util');
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);



const fileNames = ['_button.scss', '_colorScheme.scss', '_container.scss', '_general.scss', '_style.scss'];
const styleContent = `@import "./button";
@import "./container";
@import "./general";`;

inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Wie soll die Firma heißen?',
}]).then(async (answers) => {
    const folderName = answers.name;
    const folderPath = `src/styles/${folderName}`;

    if (!fs.existsSync(folderPath)) {
        await mkdir(folderPath, { recursive: true });
    }

    for (let file of fileNames) {
        let content = '';
        if (file === '_style.scss') {
            content = styleContent;
        }
        await writeFile(`${folderPath}/${file}`, content);
        console.log(`${file} wurde erfolgreich erstellt.`);
    }

    console.log(`Alles erledigt! Ordner ${folderPath} wurde mit SCSS-Dateien erstellt.`);
}).catch(error => {
    console.error('Konnte Ordner / Dateien nicht erstellen:', error);
});