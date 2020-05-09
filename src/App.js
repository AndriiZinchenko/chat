import React from 'react';

import Registration from './Registration';
import Chat from "./Chat";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem('user')
    }
  }
  
  setUser = (user) => {
    this.setState({ user })
    localStorage.setItem('user', user);
  }
  
  render() {
    return (
      <div className="App">
        <Registration setUser={this.setUser} />
        <Chat user={this.state.user} />
      </div>
    )
  }
}

export default App;
