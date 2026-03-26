import React, { Component } from "react";
import LetterButton from "./LetterButton";

class LetterBox extends Component {
    
  render() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const { guessedLetters, word } = this.props;

    return (
      <div style={{ marginTop: "20px" }}>
        {alphabet.map(letter => {
          const isWrong = guessedLetters.includes(letter) && !word.includes(letter);
          
          return (
            <LetterButton
              key={letter}
              letter={letter}
              disabled={guessedLetters.includes(letter)}
              isWrong={isWrong}
              onClick={() => this.props.onGuess(letter)}
            />
          );
        })}
      </div>
    );
  }
}

export default LetterBox;