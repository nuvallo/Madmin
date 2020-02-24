import React from "react";
import { Route, Switch } from "react-browser-router";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Login } from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { PostPage } from "./Components/Pages/PostPage";
import { CategoryPage } from "./Components/Pages/CategoryPage";
import { CommentPage } from "./Components/Pages/CommentPage";
import { UsersPage } from "./Components/Pages/UsersPage";
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
      </Switch>
    </div>
  );
}

export default App;
