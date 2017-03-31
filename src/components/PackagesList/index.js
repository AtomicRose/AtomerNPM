import React, {Component} from 'react';
import PackageInfo from './PackageInfo';

class PackagesList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <PackageInfo packageInfo={{name: 'at-pinyin', version: 'v1.0.6', description: '汉字转拼音，支持多音字，支持过滤器', stars: 11}}/>
                <PackageInfo packageInfo={{name: 'at-jsrsasign', version: 'v1.0.2', description: 'JWT解析'}}/>
                <PackageInfo packageInfo={{name: 'at-json-storage', version: 'v1.0.1', description: '方便的localStorage/sessionStorage存储，以json字符串存储，方便读取修改'}}/>
                <PackageInfo packageInfo={{name: 'at-pinyin', version: 'v1.0.6', description: '汉字转拼音，支持多音字，支持过滤器'}}/>
                <PackageInfo packageInfo={{name: 'at-jsrsasign', version: 'v1.0.2', description: 'JWT解析'}}/>
                <PackageInfo packageInfo={{name: 'at-json-storage', version: 'v1.0.1', description: '方便的localStorage/sessionStorage存储，以json字符串存储，方便读取修改'}}/>
            </div>
        );
    }
}
export default PackagesList;