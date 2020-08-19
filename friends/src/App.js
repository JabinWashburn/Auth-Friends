import React, {useState} from 'react';
import Login from './components/Login'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import {FriendsContext} from './Context/FriendsContext';
import FriendsList from './components/FriendsList'


function App() {
  const [friends, setFriends] = useState([])
  return (
    <Router>
      <div className="App">
        <FriendsContext.Provider value={{friends, setFriends}}>
        <nav>
          <Link to='/api/login'>Login</Link>
        </nav>
        <Switch>
          <Route path='/api/login' component={Login}/>
          <ProtectedRoute exact path='/api/friends' component={FriendsList}/>
        </Switch>
        </FriendsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
