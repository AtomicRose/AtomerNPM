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
            package: 'http://localhost:3800/api/package'
        }
    }
};
let env;
if (__DEV__) {
    env = envs.dev;
}
if (__ALPHA__) {
    env = envs.alpha;
}
if (__TEST__) {
    env = envs.test;
}
if (__PROD__) {
    env = envs.product;
}
window.envs = envs;
window.env = env;
export default env;