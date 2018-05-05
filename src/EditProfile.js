import React from 'react';
import './EditProfile.css';

class EditProfile extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="row">
				<form className="col l4 offset-l4 z-depth-3 edit-profile-form" onSubmit={this.onFormSubmit}>	
					<div className="row">
        					<div className="input-field col s12">
          						<input id="name" type="text" className="validate" ref="name"/>
          						<label htmlFor="name">Name</label>
        					</div>
      					</div>
					<div className="row">
        					<div className="input-field col s12">
          						<input id="age" type="text" className="validate" ref="age"/>
          						<label htmlFor="age">Age</label>
        					</div>
      					</div>
					<div className="row">
        					<div className="input-field col s12">
          						<input id="gender" type="text" className="validate" ref="gender"/>
          						<label htmlFor="gender">Gender</label>
        					</div>
      					</div>
					<div className="row">
        					<div className="input-field col s12">
          						<input id="password" type="password" className="validate" ref="password"/>
          						<label htmlFor="password">Password</label>
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
