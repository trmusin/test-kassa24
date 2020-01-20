import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import Auth from "./components/Auth/Auth";
import HomePage from "./components/Home/HomeContainer";
import {connect} from "react-redux";






const App =({isAuth})=> {

  return (
      <div className='App'>
          <Switch>
              <Route path={['/login', '/register', '/description']}  exact component= { Auth } />
              <Route path='/' render={(props)=>{
                  return isAuth ?  <HomePage {...props}/> : < Redirect to={{
                      pathname: '/login',
                      state: { from: props.location } }} />}}
              />
          </Switch>
      </div>
  );
};


const mapStateToProps = ({auth}) => {
    return{
        isAuth: auth.isAuth
    }
};

export default connect(mapStateToProps)(App);