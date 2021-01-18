import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';

import axios from 'axios';

function App() {
  const logout = () =>{
    ;
  }

  return (
    <div className = "App">
      <Router>
      <ul>
        <li>
          <Link to ="/login">Login</Link>
        </li>
        <li>
        <Link onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to ="/protected">Protected Page</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path = "/protected" component = {FriendsList}/>
        <Route path = "/login" component={Login}/>
        <Route component = {Login}/>
      </Switch>
</Router>
    </div>
  );
}

export default App;
