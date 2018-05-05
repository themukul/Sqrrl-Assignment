import React from 'react';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import './Dashboard.css';
import * as firebase from 'firebase';

class Dashboard extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
		};	
	}	
	
	componentDidMount() {
		console.log("component");
		const rootRef = firebase.database().ref().child('root');
		//console.log(rootRef);
		const userRef = rootRef.child('user');
		//console.log(userRef);
		userRef.on('value', (snap) => {
			this.setState({
				name: snap.child('name').val(),
				email: snap.child('email').val(),
				age: snap.child('age').val(),
				gender: snap.child('gender').val()						
			});
		});
	}

	componentWillUnmount() {
		this.userRef.off();
	}

	render() {
		const name = "mukul";
		return(
			<div>
				<nav className="nav-bar">					
					<button className="btn waves-effect waves-light sign-out-btn right">
						Sign Out
     					</button>
					
					<button className="btn waves-effect waves-light edit-profile-btn right">
						Edit Profile
     					</button>
				</nav>
				<div className="center-align">								
					<h4>Welcome {name}</h4>
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
