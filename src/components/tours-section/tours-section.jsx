import React, {Component} from 'react';
import './tours-section.css';

class ToursSection extends Component {
    render() {
        return (
            <section className="tours-section">
                {/* Title */}
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">One stop solution...</h2>                    
                </div>
                {/* Simple row */}
                <div className="row">
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                </div>
            </section>
        );
    }//end:render
}//end:class-ToursSection

export default ToursSection;