let fs = require('fs');
let results;
let count = 0;
let ReadFiles = function (dirPath, options) {
    results = [];
    let files = fs.readdirSync(dirPath);
    for (let i = 0; i < files.length; i++) {
        let fileDir = dirPath + '/' + files[i];
        if (options.dirRegex && !fileDir.match(options.dirRegex)) {
            if(i===files.length-1){
                options.callback(results);
            }
            continue;
        }
        let info = fs.lstatSync(fileDir);
        if (info.isDirectory()) {
            ReadFiles(fileDir, options);
        }
        if (info.isFile()) {
            if (options.fileRegex && !fileDir.match(options.fileRegex)) {
                if(i===files.length-1){
                    options.callback(results);
                }
                continue;
            }
            count++;
            fs.readFile(fileDir, (err, data) => {
                count--;
                if (err) {
                    throw err;
                } else {
                    results.push(data.toString());
                    if (options.callback && typeof options.callback === 'function' && count === 0) {
                        options.callback(results);
                    }
                }
            });
        }
    }
};
module.exports = ReadFiles;