import React, { Component } from "react";
import "./App.css";
import Message from "./components/message";
import TextBox from "./components/textBox";

class App extends Component {
  render() {
    return (
      <div id="App">
        <div>
          <div>
            <TextBox />
          </div>
          <div>
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
