import React from 'react';
import './ViewProfile.css';

class ViewProfile extends React.Component{

	constructor(props) {
		super(props);	
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
					Name : 
					<br /><br />
					Email :
					<br /><br />
					Age :
					<br /><br />
					Gender :		
				</div>
			</div>
		);
	}
}

export default ViewProfile;
