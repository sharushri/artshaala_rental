import React, { Component } from "react";
import "./App.css";
import Message from "./components/message";
import TextBox from "./components/textBox";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-section">
          <div className="text">
            <TextBox />
          </div>
          <div className="msg">
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
