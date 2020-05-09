import './message.css';

import React from "react";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TextField from '@material-ui/core/TextField';

import MyAvatar from './1.jpg';
import NotMyAvatar from './2.jpg';

class Message extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  newText: props.text,
	  editable: false,
	}
  }
  
  toggleEdit = () => {
    this.setState((current) => ({
	  ...current,
	  editable: !current.editable,
	}))
  }
  
  onChangeText = (e) => {
    this.setState({ newText: e.target.value })
  }
  
  submitChanges = (e) => {
    if (e.keyCode === 13) {
      this.props.onEditMessage({
		title: this.props.title,
		text: this.state.newText,
	  }).then(() => {
		this.setState({ editable: false })
	  })
	}
  }
  
  render() {
    return (
	  <Paper className={this.props.myMessage ? ('Message Message_my') : ('Message')} elevation={3}>
		<div className="Message_avatar">
		  {this.props.myMessage ? (
			<Avatar alt="Remy Sharp" src={MyAvatar} />
		  ) : (
			<Avatar alt="Remy Sharp" src={NotMyAvatar} />
		  )}
		</div>
		<div className="Message_container">
		  <div>{this.props.title}</div>
		  {this.state.editable ? (
		    <TextField
				value={this.state.newText}
				onChange={this.onChangeText}
				onKeyDown={this.submitChanges}
			/>
		  ) : (
			<div>{this.props.text}</div>
		  )}
		</div>
		{this.props.myMessage && (
		  <IconButton onClick={this.toggleEdit} className="Message_delete" aria-label="delete">
			<ArrowDownwardIcon />
		  </IconButton>
		)}
		<IconButton onClick={this.props.onDeleteMessage} className="Message_delete" aria-label="delete">
		  <DeleteIcon />
		</IconButton>
	  </Paper>
	)
  }
}

export default Message;