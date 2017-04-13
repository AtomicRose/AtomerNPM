import 'SCSS/theme/package-info.scss';
import React, {Component} from 'react';
import {history} from 'STORE';

class PackageInfo extends Component {
    handelGoDetail(packageName) {
        history.push({
            pathname: '/' + packageName
        });
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4"
                 onClick={() => this.handelGoDetail(this.props.packageInfo.name)}>
                <div className="package-info container-fluid">
                    <div className="col-md-8 package-name">{this.props.packageInfo.name}</div>
                    <div className="col-md-4">
                        <div className="package-version"><span className="tip">version</span><span
                            className="value">{this.props.packageInfo.version}</span></div>
                    </div>
                    <div className="col-md-12 package-description">
                        <textarea value={this.props.packageInfo.description} rows="3" readOnly="readOnly"></textarea>
                    </div>
                    <div className="col-md-12 package-operate">
                        <span className="iconfont at-icon-star user-star">{this.props.packageInfo.stars}</span>
                        <span className="iconfont at-icon-star-fill user-star"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PackageInfo;