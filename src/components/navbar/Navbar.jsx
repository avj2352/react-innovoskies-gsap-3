import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {        
        return (
            <div>
                <nav
                    className="navbar navbar-default navigation-clean-button">              
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Innovoskies</a>
                            <button
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navcol-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="active" role="presentation">
                                    <a href="#">Home
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                        href="#"
                                        >Our Works<span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li role="presentation">
                                            <a href="#">Templates
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#">Products
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#">Blog
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p className="navbar-text navbar-right actions">
                                <a className="btn btn-default action-button" role="button" href="#">LOGIN</a>
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        );
    } //end:render
} //end:Navbar

export default Navbar;