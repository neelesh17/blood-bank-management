import React from 'react';
import { Route, Switch } from "react-router-dom";
import EditBlogDetailsModal from './components/editProfileDetailsModal';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import UserLogin from './components/userLogin';
import NavBar from './components/navbar';
import ProfilePage from './components/profilePage';
import UserSignUp from './components/userSignup';
import BankLogin from './components/bankLogin';

function App() {
  return (
    <div className="App">
      {window.location.href.includes("/signup") || window.location.href.includes("/login") ? null: <NavBar />}
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/user/signup" exact component={UserSignUp}/>
        <Route path="/user/:id/profile/" exact component={ProfilePage} />
        <Route path="/user/login" exact component={UserLogin}/>
        <Route path="/bank/login" exact component={BankLogin}/>
      </Switch>
      <EditBlogDetailsModal />
      {window.location.href.includes("/signup") || window.location.href.includes("/login") ? null: <Footer />}
    </div>
  );
}

export default App;
