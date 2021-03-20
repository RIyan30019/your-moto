import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import 'bootstrap/dist/css/bootstrap.min.css'



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext= createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  
  return (
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
    <h5>{loggedInUser.name}</h5>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            
            <PrivateRoute path="/destination/:name">
              <Destination />
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
           <Route path="/destination">
           <Destination />
           </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
     </UserContext.Provider>
  );
}

export default App;
