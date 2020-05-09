import './message.css';

import React from "react";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import MyAvatar from './1.jpg';
import NotMyAvatar from './2.jpg';

class Message extends React.Component {
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
		  <div>{this.props.text}</div>
		</div>
		<IconButton onClick={this.props.onDeleteMessage} className="Message_delete" aria-label="delete">
		  <DeleteIcon />
		</IconButton>
	  </Paper>
	)
  }
}

export default Message;