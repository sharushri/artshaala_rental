import React, { Component } from "react";
import "./rental.css";

class TextBox extends Component {
  render() {
    return (
      <div className="about-rental">
        <div className="container">
          <div>
            <div className="section-title text-left ">
              <h2>Rental</h2>
              <p>
                Artshaala Music Store offers quality , new and used musical
                instruments for rental that are maintained, cleaned and serviced
                by a professional technicians. Rental musical instruments
                include like Acoustic Guitars, Electric Guitars, Guitar
                Amplifiers, Keyboards, Acoustic and electronic drum kits,
                Tablas, Harmoniums, Dholaks, as well as Pro Audio systems
                including speakers, amplifiers, mixers, mics, monitors etc.
              </p>
            </div>
          </div>
        </div>

        <div className="img-contain">
          <div className="images">
            <div className="imgs">
              <img
                src={require("../pictures/image2.jpg")}
                className="img-thumbnail"
                style={{ width: 100 + "%", marginBottom: 20 + "px" }}
              />
            </div>
            <div className="imgs">
              <img
                src={require("../pictures/image1.jpg")}
                className="img-thumbnail"
                style={{ width: 100 + "%", marginBottom: 20 + "px" }}
              />
            </div>
          </div>
          <img
            src={require("../pictures/image4.png")}
            className="img-rounded"
            style={{ width: 100 + "%", marginBottom: 20 + "px" }}
          />
        </div>
      </div>
    );
  }
}

export default TextBox;
