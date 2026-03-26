import React, { Component } from "react";

class WordDisplay extends Component {
  render() {
    const { word, guessedLetters } = this.props;

    return (
      <div style={{ fontSize: "28px", margin: "20px 0" }}>
        {word.split("").map((letter, index) => (
          <span key={index} style={{ margin: "0 10px" }}>
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
    );
  }
}

export default WordDisplay;