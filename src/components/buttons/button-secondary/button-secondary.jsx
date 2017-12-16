import React, {Component} from 'react';
import classnames from 'classnames';
import './button-secondary.css';
class ButtonSecondary extends Component{

    constructor(props,context){
        super(props,context);
    }//end:constructor

    render(){
        const {text} = this.props;
        let buttonClass = classnames({
            'btn-text':true,      
        })
        return(            
            <a href="#" className={buttonClass}>{text}</a>
        );
    }//end:render

}//end:ButtonSecondary

export default ButtonSecondary;