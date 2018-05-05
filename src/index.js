import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import EditProfile from './EditProfile';
import App from './App';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyC7ywXY0iuJSwP0lrWdn563iEQmxzKRmOc",
    authDomain: "sqrrl-assignment-6c925.firebaseapp.com",
    databaseURL: "https://sqrrl-assignment-6c925.firebaseio.com",
    projectId: "sqrrl-assignment-6c925",
    storageBucket: "sqrrl-assignment-6c925.appspot.com",
    messagingSenderId: "933448757076"
};


firebase.initializeApp(config);
/*
ReactDOM.render(
	<LoginPage />,	
	document.getElementById('app')
);

ReactDOM.render(
	<Dashboard />,	
	document.getElementById('app')
);
<<<<<<< HEAD


ReactDOM.render(
	<EditProfile />,	
	document.getElementById('app')
);
*/


ReactDOM.render(
	<App />,	
	document.getElementById('app')
);

