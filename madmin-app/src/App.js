import React from "react";
import { Route } from "react-browser-router";
import { Dashboard } from "./Components/Dashboard";
import { Login } from "./Components/Login";
import "./App.css";

function App() {
  return (
    <div>
      <Route extact path="/" component={Login} />
    </div>
  );
}

export default App;
