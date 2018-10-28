import React, {Component} from "react";

export class ScreamBar extends Component {
    render() {
        return (
            <div style={this.props.showScreamInputForm
                ? ScreamBar.styles.topBarHigh
                : ScreamBar.styles.topBarShort}
            >
                <div style={ScreamBar.styles.textInputWrapper}>
                    <input type="text"
                           style={ScreamBar.styles.textInput}
                           placeholder="What do you scream for?"
                           onFocus={() => this.props.updateShowScreamInputForm(true)}
                    />
                    {this.props.showScreamInputForm
                        ? (
                            <div>
                                <textarea style={ScreamBar.styles.textInput}
                                          placeholder="Please provide the details of your emergency"
                                />
                                <input type="number"
                                       style={ScreamBar.styles.textInput}
                                       placeholder="Amount in ETH you are willing to pay for it"
                                />
                            </div>

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
        "width": "98%",
        "outline": "none",
        "font-size": "1rem",
        "padding": ".5rem 0",
        "margin": "0 1%",
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
