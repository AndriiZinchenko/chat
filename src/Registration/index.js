import './registration.css';

import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import { getUser, addUser } from "../api/users";

class Registration extends React.Component {
  constructor() {
	super();
	this.state = {
	  name: '',
	  pass: '',
	  passError: '',
	}
  }
  
  createOnChange = (key) => (e) => {
    this.setState({ [key]: e.target.value })
  }
  
  setUser = () => {
	this.setState({ passError: '' })
	getUser().then((res) => {
	  if (res.length > 0) {
		const user = res.find(({ name }) => name === this.state.name);
		if (!user) {
		  addUser(this.state).then((res) => {
			console.log(res);
			this.props.setUser(res.name);
		  })
		} else {
		  if (user.pass === this.state.pass) {
			this.props.setUser(user.name);
		  } else {
		    this.setState({ passError: 'password is not valid' })
		  }
		}
	  } else {
	    addUser(this.state).then((res) => {
		  console.log(res);
		  this.props.setUser(res.name);
		})
	  }
	});
  }
  
  render() {
    return (
      <div className="Registration">
		<TextField
		  label="User name"
		  value={this.state.name}
		  onChange={this.createOnChange('name')}
		/>
		<TextField
		  error={this.state.passError}
		  helperText={this.state.passError}
		  label="Password"
		  value={this.state.pass}
		  type='password'
		  onChange={this.createOnChange('pass')}
		
		/>
		<Button
		  variant="contained"
		  color="primary"
		  disabled={this.state.name === '' || this.state.pass === ''}
		  onClick={this.setUser}
		>
		  Sing In
		</Button>
	  </div>
	)
  }
}

export default Registration;