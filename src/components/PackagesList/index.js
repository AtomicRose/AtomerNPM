import React, {Component} from 'react';
import PackageInfo from './PackageInfo';
import PackageService from 'SERVICE/PackageService';

class PackagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packagesObj: {}
        };
    }

    componentWillMount() {
        PackageService.getPackageList().then((res) => {
            this.setState({
                packagesObj: res.results
            });
        }, (err) => {
            console.log('error', err);
        });
    }

    render() {
        let packageList = [];
        if (Object.keys(this.state.packagesObj).length) {
            for (let key in this.state.packagesObj) {
                let current = this.state.packagesObj[key];
                let name = current.name;
                let version = current['dist-tags'].latest[(current['dist-tags'].latest.length - 1)];
                let description = current.versions[version].description;
                let starts = 11;
                packageList.push(<PackageInfo packageInfo={{
                    name: name,
                    version: version,
                    description: description,
                    stars: starts
                }}/>);
            }
        }
        return (
            <div className="container-fluid">
                {packageList}
            </div>
        );
    }
}
export default PackagesList;