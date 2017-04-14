let SystemConfig = require('../../config/config.js');
let ReadFiles = require('../../provider/ReadFiles');

let dirPath = SystemConfig.NPM_PACKAGE_STORAGE;

let getPackageDetail = (params) => {
    let promise = new Promise((resolve, reject) => {
        try {
            let packageListObj = {};
            ReadFiles(dirPath, {
                dirRegex: new RegExp('npm_package_storage\/'+params.name,'g'),
                fileRegex: new RegExp('npm_package_storage\/' + params.name + '\/package\.json', 'g'),
                callback: function (res) {
                    for (let i = 0; i < res.length; i++) {
                        let tempJson = JSON.parse(res[i]);
                        packageListObj[tempJson.name] = tempJson;
                    }
                    resolve(packageListObj);
                }
            });
        } catch (e) {
            reject('read files error.');
        }
    });
    return promise;
};
getPackageDetail({
    name: 'at-pinyin'
})
module.exports = getPackageDetail;
