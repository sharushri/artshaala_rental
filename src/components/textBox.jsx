import React, { Component } from "react";
import "./rental.css";
import styled, { css } from "styled-components";

const H2 = styled.h2`
  color: orange;
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const Data = styled.p`
  font-family: "Patua One", cursive;
  margin-top: 10px;
  line-height: 26px;
  color: rgba(60, 60, 60, 0.8);
`;

class TextBox extends Component {
  render() {
    return (
      <div id="about-rental">
        <div>
          <div>
            <div>
              <H2>Rental</H2>
              <Data>
                Artshaala Music Store offers quality , new and used musical
                instruments for rental that are maintained, cleaned and serviced
                by a professional technicians. Rental musical instruments
                include like Acoustic Guitars, Electric Guitars, Guitar
                Amplifiers, Keyboards, Acoustic and electronic drum kits,
                Tablas, Harmoniums, Dholaks, as well as Pro Audio systems
                including speakers, amplifiers, mixers, mics, monitors etc.
              </Data>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <Image src={require("../pictures/image2.jpg")} />
            </div>
            <div>
              <Image src={require("../pictures/image1.jpg")} />
            </div>
          </div>
          <Image src={require("../pictures/image4.png")} />
        </div>
      </div>
    );
  }
}

export default TextBox;
