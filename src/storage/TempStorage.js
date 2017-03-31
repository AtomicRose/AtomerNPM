import Storage from 'UTIL/storage';

let TempStorage = {
    TEMP_DATA_STORAGE: Storage.sessionStorage('myzd_temp_data')
};
export default TempStorage;