import React, { Component } from "react";

class NewGameButton extends Component {
  render() {
    return (
      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={this.props.onNewGame}
      >
        New Game
      </button>
    );
  }
}

export default NewGameButton;