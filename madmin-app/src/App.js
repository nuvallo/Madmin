import React from "react";
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

function App() {
  return (
    <div>
      <Switch>
        <ProtectedRoute exact path="/protected" component={Dashboard} />
        <Route exact path="/" component={Login} />
        <Route path="/posts" component={PostPage} />
        <Route path="/categories" component={CategoryPage} />
        <Route path="/comments" component={CommentPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
