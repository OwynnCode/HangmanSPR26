import React, { Component } from "react";

class GameStatusModal extends Component {
  render() {
    const { gameStatus, word } = this.props;

    if (gameStatus === "playing") return null;

    return (
      <div style={{ marginTop: "20px", padding: "20px", border: "1px solid black" }}>
        {gameStatus === "won" && <h2>You Won!</h2>}
        {gameStatus === "lost" && <h2>Game Over! The word was {word}</h2>}
      </div>
    );
  }
}

export default GameStatusModal;