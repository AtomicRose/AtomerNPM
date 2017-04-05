let output = {
    success: (results) => {
        return {
            code: 1000000,
            message: 'ok',
            results: results
        };
    },
    error: (code, message, results) => {
        return {
            code: code,
            message: message,
            results: results
        };
    }
}
module.exports = output;