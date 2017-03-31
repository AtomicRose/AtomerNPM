import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">Atomer NPM</div>
                    </div>
                   <div className="collapse navbar-collapse">
                       <ul className="nav navbar-nav navbar-right">
                           <li><a href="">SignIn</a></li>
                           <li><a href="">SignUp</a></li>
                       </ul>
                   </div>
                </div>
            </nav>
        );
    }
}

export default Header;