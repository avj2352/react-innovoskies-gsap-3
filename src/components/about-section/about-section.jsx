import React,{Component} from 'react';
import classnames from 'classnames';
import ButtonSecondary from './../buttons/button-secondary/button-secondary';
import './about-section.css';

class AboutSection extends Component{
    render(){
        return (
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">One stop solution...</h2>
                    <p className="sub-heading">We innovate new ideas with a blend of Creativity &amp; Innovation, that fall in line with the clients' requirement.</p>
                </div>
                
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">About us</h3>
                        <p className="paragraph">At INNOVOSKIES, we strike to deliver the best services to our clients in Branding, 3D & 2D Animations, Web-design and Powering Web Applications. We help clients' meet their requirements to help their business grow.</p>                        
                        <ButtonSecondary text="Learn more &rarr;"></ButtonSecondary>                        
                    </div>
                    <div className="col-1-of-2">
                        Image Composition
                    </div>
                </div>
            </section>
        );
    }//end:render
}//end:class-AboutSection

export default AboutSection;