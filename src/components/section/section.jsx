// Simple Component to test the grid layout styling.

import React, {Component} from 'react';
import './section.css';

class Section extends Component{
    render(){
        return(
            <section className="grid-test">
                {/* First Row */}
                <div className="row">
                    <div className="col-1-of-2">
                        Col 1 of 2
                    </div>
                    <div className="col-1-of-2">
                        Col 2 of 2
                    </div>
                </div>
                {/* Second Row */}
                <div className="row">
                    <div className="col-1-of-3">Col 1 of 3</div>
                    <div className="col-1-of-3">Col 1 of 3</div>
                    <div className="col-1-of-3">Col 1 of 3</div>
                </div>
                {/* Third Row */}
                <div className="row">
                    <div className="col-1-of-3">Col 1 of 3</div>
                    <div className="col-2-of-3">Col 2 of 3</div>
                </div>
                {/* Fourth Row */}
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                </div>
                {/* Fifth Row */}
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-2-of-4">Col 2 of 4</div>
                </div>
                {/* Sixth Row */}
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-3-of-4">Col 3 of 4</div>                    
                </div>  
            </section>
        );
    }
}//end:class-Section

export default Section;