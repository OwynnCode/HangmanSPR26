import React, { Component } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import WordDisplay from "./components/WordDisplay";
import LetterBox from "./components/LetterBox";
import NewGameButton from "./components/NewGameButton";
import GameStatusModal from "./components/GameStatusModal";
import LettersUsed from "./components/LettersUsed";

class App extends Component {

    state = {
  word: "REACT",
  guessedLetters: [],
  lives: 5,
  gameStatus: "playing"
};

handleGuess = (letter) => {
  if (this.state.gameStatus !== "playing") return;

  const { word, guessedLetters, lives } = this.state;

  if (guessedLetters.includes(letter)) return;

  const newGuessed = [...guessedLetters, letter];

  if (!word.includes(letter)) {
    const newLives = lives - 1;

    this.setState({
      guessedLetters: newGuessed,
      lives: newLives,
      gameStatus: newLives === 0 ? "lost" : "playing"
    });

    return;
  }

  const allLettersGuessed = word
    .split("")
    .every(l => newGuessed.includes(l));

  this.setState({
    guessedLetters: newGuessed,
    gameStatus: allLettersGuessed ? "won" : "playing"
  });
};

resetGame = () => {
  this.setState({
    word: "REACT",
    guessedLetters: [],
    lives: 5,
    gameStatus: "playing"
  });
};
    
  render() {
    const { word, guessedLetters, lives, gameStatus } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Owynn's Hangman</h1>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", marginBottom: "20px" }}>
          <HangmanDrawing lives={lives} />
          <LettersUsed guessedLetters={guessedLetters} word={word} />
        </div>

        <WordDisplay
          word={word}
          guessedLetters={guessedLetters}
        />

        <LetterBox
          guessedLetters={guessedLetters}
          word={word}
          onGuess={this.handleGuess}
        />

        
        <NewGameButton onNewGame={this.resetGame} />

        <GameStatusModal
          gameStatus={gameStatus}
          word={word}
        />
      </div>
    );
  }
}

export default App;