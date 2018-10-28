import React, {Component} from 'react';
import Source from "react-mapbox-gl/lib/source";
import {Layer, Popup} from "react-mapbox-gl";
import Icon from "./marker.png";

class PinPopup extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Popup coordinates={[-0.13235092163085938,51.518250335096376]}
                              offset={{
                                  'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                              }}>
                <h3>{this.props.title}</h3>
            </Popup>
        );
    }
}

export default PinPopup;
