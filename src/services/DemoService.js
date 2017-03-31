import HttpRequest from 'REQUEST'
import env from 'CONFIG/envs'

const API_URL = env.api_url;
let baseToDo = {
    successDo: (res) => {
        return res;
    },
    errorDo: (res) => {
        //maybe you could dialog the res.message
        return res;
    }
}
let DemoService = {
    getEmployeeProfile: (params) => {
        return HttpRequest.get({
            url: API_URL + '/api/getemployeeprofile',
            params: params
        }, baseToDo);
    },
    updateDoctorProfile: (params) => {
        return HttpRequest.post({
            url: API_URL + 'api/updatedoctorprofile',
            params: params
        });
    }
};
export default DemoService;