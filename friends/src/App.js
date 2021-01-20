import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

import axios from 'axios';

function App() {
  const logout = () =>{
    ;
  }

  return (
    
      <Router>
      <ul >
        <li >
          <Link  to ="/login" className="header_nav">Login</Link>
        </li>
        <li>
          <Link to ="/protected" className="header_nav">Protected Page</Link>
        </li>
          </ul>
      

  

      <Switch>
        <PrivateRoute exact path = "/protected">
          <FriendsList foo="bar" firstName="Kendra"/>
          </PrivateRoute> 
        <Route path = "/login" component={Login}/>
        <Route component = {Login}/>
      </Switch>
</Router>
    
  );
}

export default App;
