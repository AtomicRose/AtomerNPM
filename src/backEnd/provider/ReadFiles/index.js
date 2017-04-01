let fs = require('fs');
let results;
let count = 0;
let ReadFiles = function (dirPath, options) {
    results = [];
    let files = fs.readdirSync(dirPath);
    for (let i = (options.start || 0); i < (options.length || files.length); i++) {
        let info = fs.lstatSync(dirPath + '/' + files[i]);
        if (info.isDirectory()) {
            ReadFiles(dirPath + '/' + files[i], options);
        }
        if (info.isFile()) {
            count++;
            let filePath = dirPath + '/' + files[i];
            fs.readFile(filePath, (err, data) => {
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