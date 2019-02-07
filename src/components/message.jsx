import React, { Component } from "react";
import "./rental.css";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 25px;
  border-radius: 15px;
  border: 1px dotted white;
  width: 30%;
  height: 40px;
  margin-left: 5%;
  margin-bottom: 20px;
  background-color: DodgerBlue;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const Msg = styled.p`
  font-family: "Monoton", cursive;
  color: rgb(238, 135, 110);
  background: none;
  border: none;
  border-left: 3px #eee solid;
  font-size: 30px;
  margin-bottom: 30px;
  margin-left: 4%;
`;

const TextBox = styled.input`
  border: 2px #fff ridge;
  outline: none;
  border-radius: 20px;
  background-color: rgba(180, 180, 180, 0.4);
  box-sizing: border-box;
  font-size: 16px;
  padding: 20px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin-left: 4%;
  width: 90%;
  margin-top: 20px;
`;

class Message extends Component {
  render() {
    return (
      <div className="message-box-section">
        <div className="message-box">
          <form>
            <Msg>get in touch</Msg>
            <div className="actual-form">
              <div className="first">
                <div className="Input_Field">
                  <TextBox
                    type="text"
                    name="name"
                    placeholder="Your name here"
                  />
                </div>
                <div className="Input_Field">
                  <TextBox
                    type="text"
                    name="phone"
                    placeholder="Your phone here"
                  />
                </div>
              </div>
              <div className="Input_Field">
                <TextBox
                  type="text"
                  name="email"
                  placeholder="Your email here"
                />
              </div>
              <div className="Input_Field">
                <TextBox
                  type="text"
                  name="subject"
                  placeholder="Subject here"
                />
              </div>
              <div className="Input_Field">
                <TextBox
                  className="custom-textarea"
                  name="message"
                  placeholder="Message"
                />
              </div>
              <Input type="submit" />
            </div>
          </form>
          <p className="form-message" />
        </div>
      </div>
    );
  }
}

export default Message;
