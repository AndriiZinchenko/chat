import React from 'react';

import Registration from './Registration';
import Chat from "./Chat";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }
  
  setUser = (user) => {
    this.setState({ user })
  }
  
  render() {
    return (
      <div className="App">
        <Registration setUser={this.setUser} />
        {this.state.user && (
          <Chat user={this.state.user} />
        )}
      </div>
    )
  }
}

export default App;
