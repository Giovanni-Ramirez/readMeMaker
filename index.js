const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
      {
          type: 'input',
          message: 'What is the title of your README?',
          name: 'title',
        },
        {
            type: 'input',
            message: 'Write a short description.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Write installation instructions.',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the guildlines for contributers',
            name: 'guildlines',
        },
        {
            type: 'input',
            message: 'What are the test instructions',
            name: 'test',
        },
         {
            type: 'list',
            message: 'What github license do you want?',
            name: 'github',
            choices: ['Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License','Attribution 4.0 International','Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'The zlib/libpng License'],
         },
])
.then((response) =>
    fs.writeFile('testREADME.md',
`
${githubLicense(response.github)}
# ${response.title}

${response.description}

# Table of Context

- [installation instructions](#installation-instructions)
- [usage information](#usage-information)
- [contribution guidelines](#contribution-guidelines)
- [test instructions](#test-instructions)
- [Github license](#github-license)

${githubBadge}
# installation instructions

${response.install}

# usage information

${response.usage}

# contribution guidelines

${response.guildlines}

# test instructions

${response.test}

# Github license

This repo is under the ${response.github} ${githubBadge}

`,
(err) =>
    err ? console.error(err) : console.log('You made a README.md file')
));
//I have to make a ${call to a function with the paramiters with (response.license)} ie functionName(response.license)

//Function for the github licence
//To be honest I can make this into a array and just loop trough it to do this work but Its already done so I'll do that later

let githubBadge = '';
function githubLicense (x) {
    if (x === 'Apache 2.0 License') {
        const response = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        githubBadge = response;
    } else if (x === 'BSD 3-Clause License') {
        const response = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        githubBadge = response;
    } else if (x === 'BSD 2-Clause License') {
        const response = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        githubBadge = response;
   } else if (x === 'Attribution 4.0 International') {
      const response = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
      githubBadge = response;
   } else if (x === 'Attribution-ShareAlike 4.0 International') {
      const response = `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)`;
      githubBadge = response;
   } else if (x === 'Attribution-NonCommercial 4.0 International') {
      const response = `[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)`;
      githubBadge = response;
   } else if (x === 'Attribution-NoDerivates 4.0 International') {
      const response = `[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)`;
      githubBadge = response;
   } else if (x === 'Attribution-NonCommmercial-ShareAlike 4.0 International') {
      const response = `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)`;
      githubBadge = response;
   } else if (x === 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
      const response = `[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)`;
      githubBadge = response;
   } else if (x === 'Eclipse Public License 1.0') {
      const response = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      githubBadge = response;
   } else if (x === 'GNU GPL v3') {
      const response = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      githubBadge = response;
   } else if (x === 'GNU GPL v2') {
      const response = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      githubBadge = response;
   } else if (x === 'GNU AGPL v3') {
      const response = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      githubBadge = response;
   } else if (x === 'GNU LGPL v3') {
      const response = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      githubBadge = response;
   } else if (x === 'GNU FDL v1.3') {
      const response = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
      githubBadge = response;
   } else if (x === 'IBM Public License Version 1.0') {
      const response = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      githubBadge = response;
   } else if (x === 'The MIT License') {
      const response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      githubBadge = response;
   } else if (x === 'Mozilla Public License 2.0') {
      const response = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      githubBadge = response;
   } else if (x === 'Attribution License (BY)') {
      const response = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
      githubBadge = response;
   } else if (x === 'Open Database License (ODbL)') {
      const response = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
      githubBadge = response;
   } else if (x === 'Public Domain Dedication and License (PDDL)') {
      const response = `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
      githubBadge = response;
   } else if (x === 'The Perl License') {
      const response = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      githubBadge = response;
   } else if (x === 'The Artistic License 2.0') {
      const response = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      githubBadge = response;
   } else if (x === 'The zlib/libpng License') {
      const response = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
      githubBadge = response;
   }
}