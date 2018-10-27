import React, {Component} from 'react';
import ReactMapboxGl, {ScaleControl, ZoomControl} from "react-mapbox-gl";
import './App.css';
import {ScreamBar} from "./ScreamBar";

const Map = ReactMapboxGl(
    {
        accessToken: "pk.eyJ1Ijoicm9tYWthdHNhIiwiYSI6ImNqbnJqd3FkZjA2Mmczb2xrMHliZmgxeTIifQ.AwLH4y3Et0uW2IeOgIAJDA"
    });



class App extends Component {
    render() {
        return (
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}
            >
                <ScaleControl/>
                <ZoomControl/>
                <ScreamBar/>
            </Map>
        );
    }
}

export default App;
