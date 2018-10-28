import React, {Component} from 'react';
import ReactMapboxGl, {Layer, Feature, Source} from "react-mapbox-gl";
import './App.css';
import MapPin from "./MapPin";
import PinPopup from "./PinPopup";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            popupTitle: "",
            zoom: [17],
            center: [-87.63097788775872, 41.767174164037044]
        };
        this._onClickMap= this._onClickMap.bind(this);
    }

    _onMouseMoveMap(map, e) {
        let features = map.queryRenderedFeatures(e.point, { layers: ['layer_id'] });
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
    }

    _onClickMap(map, e) {
        let features = map.queryRenderedFeatures(e.point, { layers: ['layer_id'] });
        if (!features.length) {
            return;
        }
        let feature = features[0];
        console.log(feature.properties.description)
        this.setState({showPopup: true, popupTitle: feature.properties.title})
    }

    render() {

        const Map = ReactMapboxGl(
            {
                accessToken: "pk.eyJ1Ijoicm9tYWthdHNhIiwiYSI6ImNqbnJqd3FkZjA2Mmczb2xrMHliZmgxeTIifQ.AwLH4y3Et0uW2IeOgIAJDA"
            });


        const json = {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.03238901390978, 38.913188059745586]
                    },
                    "properties": {
                        "title": "Tordlo",
                        "description" : "Bring me the best tordlo in the Universe",
                        "amount": "14.88 ETH (3000 USD)"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.414, 37.776]
                    },
                    "properties": {
                        "title": "Dick Suck",
                        "description" : "Sucking a dick for 5 hours",
                        "amount" : "0 ETH (0 USD)"
                    }
                }]
            }
        };

        return (
            <Map
                style={"mapbox://styles/romakatsa/cjnrxz3yh0qa12rpsbne9h43s"}
                onClick={this._onClickMap}
                onMouseMove={this._onMouseMoveMap}
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}
            >
                <MapPin jsonData={json}/>
            </Map>
        );
    }
}

export default App;
