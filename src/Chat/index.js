import './chat.css';

import React from "react";
import TextField from '@material-ui/core/TextField';

import Message from "./components/Message";

import { getMessage, addMessage, deleteMessage } from "../api/messages";

class Chat extends React.Component{
  constructor() {
	super();
	this.state = {
	  list: [],
	  textField: '',
	}
  }
  
  setList = () => {
	getMessage().then((res) => {
	  this.setState({ list: [ ...res ]})
	})
  }
  
  componentDidMount() {
	this.setList();
  }
  
  onTextChange = (e) => {
	this.setState({ textField: e.target.value });
  }
  
  sendMessage = (e) => {
    if (e.keyCode === 13) {
	  addMessage({
		title: this.props.user || 'json-server',
		text: this.state.textField,
	  }).then(() => {
		this.setState({ textField: '' });
		this.setList();
	  })
	}
  }
  
  onDeleteMessage = (id) => () => {
	deleteMessage(id).then(() => {
	  this.setList();
	});
  }
  
  render() {
    return (
      <div className="Chat">
		<div className="Chat_title">Chat Name</div>
		{this.state.list.map((item) => (
		  <Message
			key={item.id}
			onDeleteMessage={this.onDeleteMessage(item.id)}
			title={item.title}
			text={item.text}
			myMessage={this.props.user === item.title}
		  />
		))}
		<div className="Chat_input">
		  <TextField
			fullWidth
			id="outlined-basic"
			label="Outlined"
			variant="outlined"
			value={this.state.textField}
			onChange={this.onTextChange}
			onKeyDown={this.sendMessage}
		  />
		</div>
	  </div>
	)
  }
}

export default Chat;