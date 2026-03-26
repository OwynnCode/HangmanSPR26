import React, { Component } from "react";

class LettersUsed extends Component {
  render() {
    const { guessedLetters, word } = this.props;

    // Separate correct and incorrect guesses
    const correctLetters = guessedLetters.filter(letter => word.includes(letter));
    const incorrectLetters = guessedLetters.filter(letter => !word.includes(letter));

    return (
      <div style={{
        width: "200px",
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
        marginLeft: "20px"
      }}>
        <h3 style={{ marginTop: "0", color: "#333" }}>Letters Used</h3>

        {correctLetters.length > 0 && (
          <div style={{ marginBottom: "15px" }}>
            <h4 style={{ color: "#008000", marginBottom: "5px" }}>Correct:</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {correctLetters.map(letter => (
                <span
                  key={letter}
                  style={{
                    display: "inline-block",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#d4f1d4",
                    color: "#008000",
                    border: "1px solid #008000",
                    borderRadius: "5px",
                    textAlign: "center",
                    lineHeight: "30px",
                    fontWeight: "bold"
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        )}

        {incorrectLetters.length > 0 && (
          <div>
            <h4 style={{ color: "#cc0000", marginBottom: "5px" }}>Incorrect:</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {incorrectLetters.map(letter => (
                <span
                  key={letter}
                  style={{
                    display: "inline-block",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#ffcccc",
                    color: "#cc0000",
                    border: "1px solid #cc0000",
                    borderRadius: "5px",
                    textAlign: "center",
                    lineHeight: "30px",
                    fontWeight: "bold"
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        )}

        {guessedLetters.length === 0 && (
          <p style={{ color: "#666", fontStyle: "italic" }}>No letters used yet</p>
        )}
      </div>
    );
  }
}

export default LettersUsed;