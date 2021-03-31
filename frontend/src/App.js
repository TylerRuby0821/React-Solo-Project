import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./Components/LoginFormPage";
import SignupFormPage from "./Components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./Components/Navigation";
import HomePage from './Components/HomePage'
import MainPage from './Components/MainPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/main'>
            <MainPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
