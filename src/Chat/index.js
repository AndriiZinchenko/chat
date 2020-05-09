import './chat.css';

import React from "react";
import TextField from '@material-ui/core/TextField';

import Message from "./components/Message";

class Chat extends React.Component{
  render() {
    return (
      <div className="Chat">
		<div className="Chat_title">Chat Name</div>
		<Message title="name" text="text" />
		<Message title="name" text="text" myMessage />
		<Message title="name" text="text" myMessage />
		<Message title="name" text="text" />
		<div className="Chat_input">
		  <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
		</div>
	  </div>
	)
  }
}

export default Chat;