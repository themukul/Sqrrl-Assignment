import React from 'react';
import EditProfile from './EditProfile';
import './Dashboard.css';
import * as firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';

class Dashboard extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			age: "",
			gender: "",
			editProfile: 0,
			user: null,
		};

		this.handleEditProfile = this.handleEditProfile.bind(this);
		this.handleSignOut = this.handleSignOut.bind(this);	
	}	
	
	componentDidMount() {
		const user = firebase.auth().currentUser;
		const rootRef = firebase.database().ref().child('root');
		//console.log(rootRef);
		const userRef = rootRef.child('user');
		//console.log(userRef);
		userRef.on('value', (snap) => {
			this.setState({
				name: snap.child('name').val(),
				email: snap.child('email').val(),
				age: snap.child('age').val(),
				gender: snap.child('gender').val(),
				user						
			});
		});

	}

	componentWillUnmount() {
		//this.userRef.off();
	}

	handleEditProfile() {
		const currentState = this.state;
		currentState.editProfile = 1;
		this.setState(
			currentState
		);
	}
	
	handleSignOut() {
		const currentState = this.state;
		currentState.user = null;
		firebase.auth().signOut().then(this.setState({currentState}));
	}

	render() {
		if(this.state.editProfile){
			return <Redirect to='/editprofile' />
		}
		if(!(this.state.user)){
			return <div> You must login to continue. <Link to='/signin'> Log In </Link></div>		
		}
		return(
			<div>
				<nav className="nav-bar">					
					<button className="btn waves-effect waves-light sign-out-btn right" onClick={this.handleSignOut}>
						Sign Out
     					</button>
					
					<button className="btn waves-effect waves-light edit-profile-btn right" onClick={this.handleEditProfile}>
						Edit Profile
     					</button>
				</nav>
				<div className="center-align">								
					<h4>Welcome {this.state.name}</h4>
				</div>				
				<div className="center-align">
					Name : {this.state.name}
					<br /><br />
					Email : {this.state.email}
					<br /><br />
					Age :	{this.state.age}
					<br /><br />
					Gender : {this.state.gender}		
				</div>
			</div>
		);
	}
}

export default Dashboard;
