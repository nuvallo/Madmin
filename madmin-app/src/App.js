import React from "react";
import { Route, Switch } from "react-browser-router";
import { Dashboard } from "./Components/Dashboard";
import { Login } from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <ProtectedRoute exact path="/protected" component={Dashboard} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
