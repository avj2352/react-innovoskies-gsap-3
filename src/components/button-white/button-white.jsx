import React, {Component} from 'react';
import './button-white.css';
class ButtonWhite extends Component{

    constructor(props,context){
        super(props,context);
    }//end:constructor

    render(){
        const {text} = this.props;
        return(
            <a href="#" className="btn btn-white btn-animated">{text}</a>
        );
    }//end:render

}//end:ButtonWhite

export default ButtonWhite;