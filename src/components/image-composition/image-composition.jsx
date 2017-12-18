import React, {Component} from 'react';
import './image-composition.css';
import image01 from './../../assets/img/nat-1-large.jpg';
import image02 from './../../assets/img/nat-2-large.jpg';
import image03 from './../../assets/img/nat-3-large.jpg';

class ImageComposition extends Component {
    render() {
        return (
            <div className="composition">
                <img src={image01} alt="photo-01" className="composition__photo composition__photo--p1"/>
                <img src={image02} alt="photo-02" className="composition__photo composition__photo--p2"/>
                <img src={image03} alt="photo-03" className="composition__photo composition__photo--p3"/>
            </div>
        );
    }//end:render
}//end:ImageComposition

export default ImageComposition;