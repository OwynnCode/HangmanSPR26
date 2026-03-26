import React, { Component } from "react";

class LetterButton extends Component {
  render() {
    const { letter, disabled, isWrong, onClick } = this.props;

    let backgroundColor = "#fff";
    let color = "#000";

    if (disabled) {
      if (isWrong) {
        backgroundColor = "#ffcccc"; // Light red
        color = "#cc0000"; // Dark red
      } else {
        backgroundColor = "#d4f1d4"; // Light green
        color = "#008000"; // Dark green
      }
    }

    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          margin: "5px",
          padding: "10px",
          width: "45px",
          height: "45px",
          fontSize: "18px",
          backgroundColor: backgroundColor,
          color: color,
          border: "1px solid #000",
          cursor: disabled ? "not-allowed" : "pointer"
        }}
      >
        {letter}
      </button>
    );
  }
}

export default LetterButton;