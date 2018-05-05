import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{

	constructor(props) {
		super(props)

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(evt){
		evt.preventDefault();
		console.log(this.refs.email.value);
		console.log(this.refs.password.value);
	}	

	render() {
		return(
			<div className="row">
				<form className="col l4 offset-l4 z-depth-3 login-form" onSubmit={this.onFormSubmit}>	
					<div className="row">
        					<div className="input-field col s12">
          						<input id="email" type="email" className="validate" ref="email"/>
          						<label htmlFor="email">Email</label>
        					</div>
      					</div>
					<div className="row">
        					<div className="input-field col s12">
          						<input id="password" type="password" className="validate" ref="password"/>
          						<label htmlFor="password">Password</label>
        					</div>
      					</div>
					<button className="btn waves-effect waves-light" type="submit" name="action">Submit
    					<i className="material-icons right">send</i>
  					</button>

				</form>
			</div>
		);
	}
}

export default LoginPage;
