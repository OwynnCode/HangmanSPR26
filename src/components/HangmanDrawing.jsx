import React, { Component } from "react";
import noose from "../assets/noose.png";
import upperandlowerbody from "../assets/upperandlowerbody.png";
import oneArm from "../assets/1arm.png";
import botharms from "../assets/botharms.png";
import oneLeg from "../assets/1leg.png";
import dead from "../assets/Dead.png";

class HangmanDrawing extends Component {
  getHangmanImage = (lives) => {
    // Map lives to image stages
    const images = {
      5: noose,                    // Empty gallows
      4: upperandlowerbody,        // Upper and lower body
      3: oneArm,                   // 1 arm
      2: botharms,                 // Both arms
      1: oneLeg,                   // 1 leg
      0: dead                       // Dead
    };

    return images[lives] || dead;
  };

  render() {
    const { lives } = this.props;
    const image = this.getHangmanImage(lives);

    return (
      <div style={{ margin: "20px 0" }}>
        <div style={{
          width: "300px",
          height: "300px",
          margin: "0 auto",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9"
        }}>
          <img
            src={image}
            alt={`Hangman with ${lives} lives`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }}
          />
        </div>
        <h3>Lives Remaining: {lives}</h3>
      </div>
    );
  }
}

export default HangmanDrawing;