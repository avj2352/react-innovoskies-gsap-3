import React,{Component} from 'react';
import classnames from 'classnames';
import './about-section.css';

class AboutSection extends Component{
    render(){
        return (
            <section className="section-about">
                <h2 className="heading-secondary">One stop solution in media and web-design.</h2>
                <p>We innovate new ideas with a blend of Creativity &amp; Innovation, that fall in line with the clients' requirement.</p>
            </section>
        );
    }//end:render
}//end:class-AboutSection

export default AboutSection;