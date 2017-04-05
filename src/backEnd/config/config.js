let SystemConfig;
// console.log(process.env);
SystemConfig = {
    NPM_PACKAGE_STORAGE: '/home/npm_package_storage'
}
// if(process.env.NODE_ENV == 'production'){
//     SystemConfig = {
//         NPM_PACKAGE_STORAGE: process.env.NODE_ENV == '/home/npm_package_storage'
//     }
// }
// if(process.env.NODE_ENV == 'development'){
//     SystemConfig = {
//         NPM_PACKAGE_STORAGE: 'E://git/AtomerNPM/testDir'
//     }
// }

module.exports = SystemConfig;