import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import UserAge from "./pages/UserAge";
import "./static/styles/App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/age">
            <UserAge />
          </Route>
          <Route path="/">
            <Redirect to="/user" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
