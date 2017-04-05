import HttpRequest from 'REQUEST';
import env from 'CONFIG/envs';

const API_URL = env.api_url.package;

let baseToDo = {
    successDo: (res) => {
        return res;
    },
    errorDo: (res) => {
        // maybe you could dialog the res.message
        return res;
    }
};
let PackageService = {
    getPackageList: (params) => {
        return HttpRequest.get({
            url: API_URL + '/packages',
            params: params || {}
        }, baseToDo, {
            ignoreAuthorization: true
        });
    }
};
export default PackageService;