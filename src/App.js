import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import Login from './components/login';
import NavBar from './components/navbar';
import SignUp from './components/signup';


function App() {
  return (
    <div className="App">
      {window.location.href.includes("/signup") || window.location.href.includes("/login") ? null: <NavBar />}
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
      {window.location.href.includes("/signup") || window.location.href.includes("/login") ? null: <Footer />}
    </div>
  );
}

export default App;
