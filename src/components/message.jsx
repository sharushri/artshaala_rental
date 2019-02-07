import React, { Component } from "react";
import "./rental.css";
import styled from "styled-components";

class Message extends Component {
  render() {
    return (
      <div className="message-box-section">
        <div className="message-box">
          <form>
            <p className="msg-head">get in touch</p>
            <div className="actual-form">
              <div className="first">
                <div className="Input_Field">
                  <input type="text" name="name" placeholder="Your name here" />
                </div>
                <div className="Input_Field">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your phone here"
                  />
                </div>
              </div>
              <div className="Input_Field">
                <input type="text" name="email" placeholder="Your email here" />
              </div>
              <div className="Input_Field">
                <input type="text" name="subject" placeholder="Subject here" />
              </div>
              <div className="Input_Field">
                <textarea
                  className="custom-textarea"
                  name="message"
                  placeholder="Message"
                />
              </div>
              <input type="submit" className="btn btn-info" />
            </div>
          </form>
          <p className="form-message" />
        </div>
      </div>
    );
  }
}

export default Message;
