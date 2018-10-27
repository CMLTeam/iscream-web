import React, {Component} from "react";

export class ScreamBar extends Component {
    render() {
        return (
            <div style={ScreamBar.styles.topBar}>
                <div style={ScreamBar.styles.textInputWrapper}>
                    <input style={ScreamBar.styles.textInput}
                           onClick={(e) => {
                               e.stopPropagation();
                               alert("test")
                           }}
                    />
                </div>
                <button style={ScreamBar.styles.topBarButton}>SCREAM</button>
            </div>
        )
    }
}

ScreamBar.styles = {
    textInput: {
        "type": "text",
        "background-color": "#e5e5e5",
        "height": "100%",
        "width": "100%",
        "outline": "none",
        "margin-left": "2%",
        "border-width": "0",
        "border-radius": "6px 0 0 6px",
        "box-sizing": "border-box"
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
    topBar: {
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
