import HttpRequest from 'REQUEST';
import env from 'CONFIG/envs';

const API_URL = env.api_url.login;
let baseToDo = {
    successDo: (res) => {
        return res;
    },
    errorDo: (res) => {
        // maybe you could dialog the res.message
        return res;
    }
};
let LoginService = {
    sendMessage: (params) => {
        return HttpRequest.post({
            url: API_URL + '/api/login/sendVerifyCode',
            params: params
        }, baseToDo, {
            ignoreAuthorization: true
        });
    },
    loginSubmit: (params) => {
        return HttpRequest.post({
            url: API_URL + '/api/login/checkVerifyCode',
            params: params
        }, baseToDo, {
            ignoreAuthorization: true
        });
    }
};
export default LoginService;