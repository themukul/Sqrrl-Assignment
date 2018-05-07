import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import * as routes from './RoutesConstants';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			email : "",
			password: "",
			user: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleRedirect = this.handleRedirect.bind(this);
	}

	handleChange(event){
		console.log("inside handleChange " + event.target.name);
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event){
		console.log("inside handleSubmit");
		event.preventDefault();
		const authRef = firebase.auth();
		authRef.signInWithEmailAndPassword(this.state.email, this.state.password).then(this.handleRedirect).catch(function(error) {
			console.log(error.message);
			console.log(error.code);
		});
		
	}

	handleRedirect(){
		const currentState = this.state;
		currentState.user = firebase.auth().currentUser;
		this.setState({
			currentState
		});
	}


		

	render() {
		if(this.state.user){
			return <Redirect to='/dashboard' />
		}
		
		return(
			<div className="row">
				<form className="col l4 offset-l4 z-depth-3 login-form" onSubmit={this.handleSubmit}>	
					<div className="row">
        					<div className="input-field col s12">
          						<input id="email" name="email" type="email" className="validate" onChange={this.handleChange} />
          						<label htmlFor="email">Email</label>
        					</div>
      					</div>
					<div className="row">
        					<div className="input-field col s12">
          						<input id="password" name="password" type="password" className="validate" onChange={this.handleChange} />
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
