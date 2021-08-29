import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import ListAll from './components/ListAll';
import LandingAdmin from './components/LandingAdmin';
import LandingGeneral from './components/LandingGeneral';

//import * as serviceWorker from './serviceWorker';

ReactDOM.render(

<Router>
    <div> 
        <Route exact path='/' component={Login} />
        <Route exact path='/LandingAdmin/:user' component={LandingAdmin} />
        <Route exact path='/LandingGeneral/:user' component={LandingGeneral} />
      
    </div>
</Router>,
document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
