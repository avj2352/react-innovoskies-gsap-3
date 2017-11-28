import React, {Component} from 'react';
import './header.css';
import logo from './../../assets/img/innovo_logo.png';
import ButtonWhite  from './../button-white/button-white';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="logo-box">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Innovoskies</span>
                        <span className="heading-primary-sub">welcomes you</span>
                    </h1>
                    <ButtonWhite text="Explore !"></ButtonWhite>
                </div>
            </header>
        );
    }//end:render
}//end:class-Header

export default Header;