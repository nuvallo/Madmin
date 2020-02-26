import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-browser-router";
import { Dashboard } from "./Components/Pages/Dashboard/Dashboard";
import { Login } from "./Components/Pages/Login/Login";
import ProtectedRoute from "./Components/Pages/Login/ProtectedRoute";
import { PostPage } from "./Components/Pages/Posts/PostPage";
import { CategoryPage } from "./Components/Pages/Categories/CategoryPage";
import { CommentPage } from "./Components/Pages/Comments/CommentPage";
import { UsersPage } from "./Components/Pages/Users/UsersPage";
import { Details } from "./Components/Pages/Posts/Details";
import "./App.css";
import { GlobalContext } from "./Context/GlobalState";
import axios from "axios";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res.data.data);
        setState(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <GlobalContext.Provider value={{ state }}>
      <div>
        <Switch>
          <ProtectedRoute exact path="/protected">
            <Dashboard value={state} />
          </ProtectedRoute>
          <Route exact path="/" component={Login} />
          <Route path="/posts" component={PostPage} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/comments" component={CommentPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
