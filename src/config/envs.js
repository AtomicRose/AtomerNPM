let envs = {
    product: {
        name: 'product',
        api_url: {
            package: 'http://api.npm.atomer.tech/api/package'
        }
    },
    dev: {
        name: 'dev',
        api_url: {
            package: 'http://localhost:3000/api/package'
        }
    }
};
export default envs.dev;