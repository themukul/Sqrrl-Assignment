import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import * as routes from './RoutesConstants';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import EditProfile from './EditProfile';


class App extends React.Component{
	
	constructor(props){
		super(props);
	}

	render() {
		return(
			<Router>
				<div>
					<Redirect from="/" to={routes.SIGN_IN} />
					<Route path={routes.SIGN_IN} component={LoginPage} />
					<Route path={routes.DASHBOARD} component={Dashboard} />
					<Route path={routes.EDIT_PROFILE} component={EditProfile} />			
				</div>			
			</Router>	
		);
	}
}


export default App;


