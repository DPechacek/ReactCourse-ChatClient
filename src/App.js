import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./ChatWindow";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  users = [{ username: 'Amy' }, { username: 'John' }];

  state = {
      messages: [
          { username: 'Amy', text: 'Hi, Jon!' },
          { username: 'Amy', text: 'How are you?' },
          { username: 'John', text: 'Hi, Amy! Good, you?' },
      ]
  };

  postMessage = (username, message) => {
    this.setState((currentState) => ({
        messages: [ ...currentState.messages, { username: username, text: message } ]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {
            this.users.map((user, index) => (
                <ChatWindow key={index} username={user.username} messages={this.state.messages} postMessage={this.postMessage}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
