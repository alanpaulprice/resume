const { execSync } = require('child_process');
const fs = require('fs');

function shellSync(command) {
    execSync(command,
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null)
            {
                console.log(`execSync error: ${error}`);
            }
        }
    );
}

function replaceString(file, find, replace) {
    let contents = fs.readFileSync(file, 'utf8');
    contents = contents.replace(find, replace);
    fs.writeFileSync(file, contents);
}

shellSync('electron-pdf index.html resume_alan-price_front-end-developer_fc.pdf');
replaceString('./index.html', '<body class="A4 print--friendly">', '<body class="A4 print-friendly">');
shellSync('electron-pdf index.html resume_alan-price_front-end-developer_pf.pdf');
replaceString('./index.html', '<body class="A4 print-friendly">', '<body class="A4 print--friendly">');