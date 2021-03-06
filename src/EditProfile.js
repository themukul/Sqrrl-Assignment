import React from 'react';
import './EditProfile.css';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class EditProfile extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			name: " ",
			age: " ",
			gender: " ",
			password: " ",
			dashboard: 0
		};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRedirect = this.handleRedirect.bind(this);
	}

	componentDidMount() {
		console.log("component")
		const rootRef = firebase.database().ref().child('root');
		//console.log(rootRef);
		const userRef = rootRef.child('user');
		//console.log(userRef);
		userRef.on('value', (snap) => {
			console.log(snap);
			this.setState({
				name: snap.child('name').val(),
				age: snap.child('age').val(),
				gender: snap.child('gender').val()						
			});
		});	
	}

	handleChange(event){
		console.log("inside handleChange" + event.target.name);
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event){
		console.log("inside handleSubmit");
		event.preventDefault();
		const dbRef = firebase.database().ref("/root/user");
		if(this.state.password !== " "){
			var user = firebase.auth().currentUser;
			var newPassword = this.state.password;
			user.updatePassword(newPassword);
		}
		dbRef.update({name: this.state.name, age: this.state.age, gender: this.state.gender}).then(this.handleRedirect);

	}

	handleRedirect() {
		const currentState = this.state;
		currentState.dashboard = 1;
		this.setState({
			currentState
		});
	}

	render() {
		if(this.state.name === " "){
			return null;
		}
		if(this.state.dashboard){
			return <Redirect to='/dashboard' />
		}
		
		return(
			

			
			<div className="row">

				<form className="col s12 l4 offset-l4 z-depth-3 edit-profile-form" onSubmit={this.handleSubmit}>	
					<div className="row">
        					<div className="input-field col s12">
          						<input id="name" name="name" type="text" className="validate" ref="name" defaultValue={this.state.name} onChange={this.handleChange}/>
          						<label htmlFor="name">Name</label>
        					</div>
      					</div>
					<div className="row">
        					<div className="input-field col s12">
          						<input id="age" name="age" type="text" className="validate" ref="age" defaultValue={this.state.age} onChange={this.handleChange}/>
          						<label htmlFor="age">Age</label>
        					</div>
      					</div>
					<div className="row">
        					<div className="input-field col s12">
          						<input id="gender" name="gender" type="text" className="validate" ref="gender" defaultValue={this.state.gender} onChange={this.handleChange}/>

          						<label htmlFor="gender">Gender</label>
        					</div>
      					</div>

					<div className="row">
        					<div className="input-field col s12">
          						<input id="password" name="password" type="password" className="validate" ref="password" onChange={this.handleChange}/>

          						<label htmlFor="password">Password (Must be atleast 6 characters)</label>
        					</div>
      					</div>
					
					<button className="btn waves-effect waves-light" type="submit" name="action">Update
    					<i className="material-icons right">send</i>
  					</button>
				</form>
			</div>
		);
	}
}

export default EditProfile;
