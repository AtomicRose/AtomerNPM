let SystemConfig = require('../../config/config.js');
let ReadFiles = require('../../provider/ReadFiles');

let dirPath = SystemConfig.NPM_PACKAGE_STORAGE;

let getPackageList = () => {
    let promise = new Promise((resolve, reject)=>{
        try {
            let packageListObj = {};
            ReadFiles(dirPath, {
                dirRegex: /npm_package_storage\/[a-zA-Z0-9_-]+/g,
                fileRegex: /npm_package_storage\/[a-zA-Z0-9_-]+\/package\.json/g,
                callback: function (res) {
                    for (let i = 0; i < res.length; i++) {
                        let tempJson = JSON.parse(res[i]);
                        packageListObj[tempJson.name] = tempJson;
                    }
                    resolve(packageListObj);
                }
            });
        }catch(e){
            reject('read files error.');
        }
    });
    return promise;
};
module.exports = getPackageList;
