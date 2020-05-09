import './registration.css';

import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
		<TextField id="standard-basic" label="User name" />
		<TextField id="standard-basic" label="Password" />
		<Button variant="contained" color="primary">
		  Sing In
		</Button>
	  </div>
	)
  }
}

export default Registration;