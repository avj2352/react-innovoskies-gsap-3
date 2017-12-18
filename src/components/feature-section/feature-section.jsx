import React, {Component} from 'react';
import './feature-section.css';

class FeatureSection extends Component {
    render() {
        return (
            <section className="feature-section">                
                <div className="row">
                    {/* First Card */}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-laptop"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Web Templates</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>  
                        </div>
                    </div>
                    {/* Second Card */}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-tablet"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Ionic Templates</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>  
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-rss"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Blog Tutorials</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>  
                        </div>
                    </div>
                    {/* Fourth Card */}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-message-multiple"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Contact Us</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>  
                        </div>
                    </div>
                </div>
            </section>
        );
    }//end:render
}//end:class-FeatureSection

export default FeatureSection;