import './registration.css';

import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class Registration extends React.Component {
  constructor() {
	super();
	this.state = {
	  name: '',
	  pass: '',
	}
  }
  
  createOnChange = (key) => (e) => {
    this.setState({ [key]: e.target.value })
  }
  
  setUser = () => {
    this.props.setUser(this.state.name);
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