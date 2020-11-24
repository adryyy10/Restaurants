import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/"}> Restaurants </Link>
                        </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Header;