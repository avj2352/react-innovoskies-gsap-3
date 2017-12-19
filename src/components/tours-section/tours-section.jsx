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
                    {/* Card Component */}
                        <div className="card">
                            {/* Front side of the card */}
                            <div className="card__side card__side--front">
                                FRONT SIDE OF THE CARD
                            </div>
                            {/* Back side of the card */}
                            <div className="card__side card__side--back">
                                BACK SIDE OF THE CARD
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                        Rotating Card
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                        Rotating Card
                        </div>
                    </div>
                </div>
            </section>
        );
    }//end:render
}//end:class-ToursSection

export default ToursSection;