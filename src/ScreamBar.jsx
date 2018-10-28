import React, {Component} from "react";

export class ScreamBar extends Component {
    constructor(state) {
        super(state);
        this.state = {
            showScreamInputForm: false
        }
    }

    render() {
        return (
            <div style={this.state.showScreamInputForm
                ? ScreamBar.styles.topBarHigh
                : ScreamBar.styles.topBarShort}
                 onBlur={() => {
                     this.setState({showScreamInputForm: false});
                 }}
            >
                <div style={ScreamBar.styles.textInputWrapper}>
                    <input type="text"
                           style={ScreamBar.styles.textInput}
                           placeholder="AAAAAAAAAAAAa"
                           onFocus={() => {
                               this.setState({showScreamInputForm: true});
                           }}
                           onBlur={(e) => e.stopPropagation()}/>
                    {this.state.showScreamInputForm
                        ? (
                            <input type="text"
                                   style={ScreamBar.styles.textInput}
                                   placeholder="AAAAAAAAAAAAa"/>
                        )
                        : null}
                </div>
                <button style={ScreamBar.styles.topBarButton}>SCREAM</button>
            </div>
        )
    }
}

ScreamBar.styles = {
    textInput: {
        "background-color": "#e5e5e5",
        "width": "80%",
        "outline": "none",
        "font-size": "1rem",
        "margin": "10px 10px 10px 10px",
        "border": "0",
        "border-bottom": "2px",
        "border-style": "solid",
        "border-color": "#d3d3d3",
        "box-sizing": "border-box",
        ":focus": {
            "border": "0",
            "border-bottom": "2px",
            "border-style": "solid",
            "border-color": "#3770c6"
        }
    },
    textInputWrapper: {
        "border-width": "1px 0 1px 1px",
        "border-style": "solid",
        "border-color": "#3770c6",
        "background-color": "#e5e5e5",
        "height": "100%",
        "width": "100%",
        "border-radius": "6px 0 0 6px",
        "box-sizing": "border-box",
        ":hover": {
            "background-color": "#d1d1d1"
        }
    },
    topBarButton: {
        "border-width": "1px 1px 1px 0",
        "border-style": "solid",
        "border-color": "#3770c6",
        "background-color": "rgb(84, 152, 255)",
        "height": "100%",
        "color": "white",
        "border-radius": "0 6px 6px 0",
        "cursor": "pointer",
        "box-sizing": "border-box",
        "outline": "none",
        ":hover": {
            "background-color": "#3770c6"
        }
    },
    topBarHigh: {
        "position": "absolute",
        "align": "justify",
        "top": "5%",
        "left": "50%",
        "transform": "translate(-50%)",
        "width": "70%",
        "height": "15rem",
        "display": "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "padding": "0"
    },
    topBarShort: {
        "position": "absolute",
        "align": "justify",
        "top": "5%",
        "left": "50%",
        "transform": "translate(-50%)",
        "width": "70%",
        "height": "3rem",
        "display": "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "padding": "0"
    }
};
