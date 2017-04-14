import React, {Component} from 'react';
import PackageService from 'SERVICE/PackageService';

class PackageDetail extends Component {
    componentWillMount = ()=>{
        PackageService.getPackageDetail().then(()=>{

        },()=>{

        });
    }
    render() {
        return (
            <div className="">abc</div>
        );
    }
}
export default PackageDetail;