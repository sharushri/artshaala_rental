import React, { Component } from "react";
import "./rental.css";
import styled from "styled-components";

const StyledMessage = styled.div`
  input[type="submit"] {
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
  }

  form div > div:first-child div,
  form > div > div {
    margin-bottom: 10px;
  }

  form > p {
    font-family: "Monoton", cursive;
    color: rgb(238, 135, 110);
    background: none;
    border: none;
    border-left: 3px #eee solid;
    font-size: 30px;
    margin-bottom: 30px;
    margin-left: 4%;
  }

  input[type="text"],
  textarea {
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
  }
`;

class Message extends Component {
  render() {
    return (
      <StyledMessage>
        <div id="message-box-section">
          <div>
            <form>
              <p>get in touch</p>
              <div>
                <div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name here"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your phone here"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email here"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject here"
                  />
                </div>
                <div>
                  <textarea name="message" placeholder="Message" />
                </div>
                <input type="submit" />
              </div>
            </form>
            <p />
          </div>
        </div>
      </StyledMessage>
    );
  }
}

export default Message;
