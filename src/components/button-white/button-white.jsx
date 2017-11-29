import React, {Component} from 'react';
import classnames from 'classnames';
import './button-white.css';
class ButtonWhite extends Component{

    constructor(props,context){
        super(props,context);
    }//end:constructor

    render(){
        const {text,color} = this.props;
        let buttonClass = classnames({
            'btn':true,
            'btn-animated':true,
            'btn-white':color=='white',
            'btn-green':color=='green'
        })
        return(
            <a href="#" className={buttonClass}>{text}</a>
        );
    }//end:render

}//end:ButtonWhite

export default ButtonWhite;