import React, {Component} from 'react';
import classnames from 'classnames';
import './button.css';
class Button extends Component{

    constructor(props,context){
        super(props,context);
    }//end:constructor

    render(){
        const {text,color} = this.props;
        let buttonClass = classnames({
            'btn':true,
            'btn-animated':true,
            'btn-white':color=='white',
            'btn-green':color=='green',
            'btn-blue':color=='blue',
            'btn-red':color=='red',
            'btn-gold':color=='gold',
        })
        return(
            <a href="#" className={buttonClass}>{text}</a>
        );
    }//end:render

}//end:Button

export default Button;