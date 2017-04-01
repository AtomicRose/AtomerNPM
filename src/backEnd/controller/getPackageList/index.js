let SystemConfig = require('../../config/config.js');
let ReadFiles = require('../../provider/ReadFiles');

let dirPath = SystemConfig.NPM_PACKAGE_STORAGE;

let array = [];
ReadFiles(dirPath, {
    callback: function(res){
        console.log(res);
    }
}, 1);
