/**
 * 本文件的作用就是直观呈现 整个应用状态结构树 及其 初始值
 */
export default {
    /*Header*/
    header: {
        title: '名医主刀',
        display: {
            //默认在微信浏览器、APP浏览器中，隐藏header。其他浏览器中显示头部
            wechat: false,
            native: false,
            other: true
        },
        //header左侧操作栏
        lOperate: {
            name: 'back',
            options: {}
        },
        //header右侧操作栏
        rOperate: {
            name: '',
            options: {}
        }
    }
};
