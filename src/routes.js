import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignupScreen from "./screens/auth/signup/SignupScreen";
import CreatePost from "./components/post/createPost";
import Feed from "./components/post/feed";
import AppPaths from "./lib/appPaths";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={AppPaths.HOME} exact component={HomeScreen} />
          <Route path={AppPaths.CHAT_ROOM} exact component={HomeScreen} />
          <Route path={AppPaths.LOGIN} exact component={LoginScreen} />
          <Route path={AppPaths.SIGN_UP} exact component={SignupScreen} />
          <Route path={AppPaths.CREATE_POST} exact component={CreatePost} />
          <Route path={AppPaths.FEED} exact component={Feed} />
        </Switch>
      </Router>
    );
  }
}
