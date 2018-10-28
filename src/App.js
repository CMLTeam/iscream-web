import React, {Component} from 'react';
import ReactMapboxGl, {ScaleControl, ZoomControl} from "react-mapbox-gl";
import './App.css';
import {ScreamBar} from "./ScreamBar";

const Map = ReactMapboxGl(
    {
        accessToken: "pk.eyJ1Ijoicm9tYWthdHNhIiwiYSI6ImNqbnJqd3FkZjA2Mmczb2xrMHliZmgxeTIifQ.AwLH4y3Et0uW2IeOgIAJDA"
    }
);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showScreamInputForm: false,
            screamTitle: "",
            screamDetails: "",
            screamAmount: 0
        };
        this.updateShowScreamInputForm = this.updateShowScreamInputForm.bind(this);
        this.updateScreamTitle = this.updateScreamTitle.bind(this);
        this.updateScreamDetails = this.updateScreamDetails.bind(this);
        this.updateScreamAmount = this.updateScreamAmount.bind(this);
    }

    updateShowScreamInputForm(newShow) {
        this.setState({showScreamInputForm: newShow});
    }

    updateScreamTitle(newTitle) {
        this.setState({screamTitle: newTitle});
    }

    updateScreamDetails(newDetails) {
        this.setState({screamDetails: newDetails});
    }

    updateScreamAmount(newAmount) {
        this.setState({screamAmount: newAmount});
    }

    render() {
        return (
            <div>
                <div>
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100vh",
                            width: "100vw"
                        }}
                        onClick={() => this.updateShowScreamInputForm(false)}
                    >
                        <ScaleControl/>
                        <ZoomControl/>
                    </Map>
                </div>
                <ScreamBar showScreamInputForm={this.state.showScreamInputForm}
                           updateShowScreamInputForm={this.updateShowScreamInputForm}
                           updateScreamTitle={this.updateScreamTitle}
                           updateScreamDetails={this.updateScreamDetails}
                           updateScreamAmount={this.updateScreamAmount}
                           screamTitle={this.state.screamTitle}
                           screamDetails={this.state.screamDetails}
                           screamAmount={this.state.screamAmount}
                />
            </div>
        );
    }
}

export default App;
