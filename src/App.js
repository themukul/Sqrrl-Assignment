import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
					
					<Route path={routes.SIGN_IN} component={LoginPage} />
					<Route path={routes.DASHBOARD} component={Dashboard} />
					<Route path={routes.EDIT_PROFILE} component={EditProfile} />			
				</div>			
			</Router>	
		);
	}
}


export default App;


