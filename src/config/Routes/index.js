import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../../pages/Home";

import DetailHeader from "../../parts/DetailHeader";
import Navbar from "../../parts/Navbar";

import MyPost from "../../pages/MyPost";
import MyFoto from "../../pages/MyFoto";
import MyFriend from "../../pages/MyFriend";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import AllUser from "../../pages/AllUser";
import Message from "../../pages/Message";

function Routes() {
  const history = createBrowserHistory({
    baseUrl: process.env.PUBLIC_URL,
  });

  const DinamicRoute = ({ exact, path, component: Component }) => (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <Navbar />
          <DetailHeader />
          <Component {...props} />
        </div>
      )}
    />
  );

  return (
    <Router history={history}>
      <Switch>
        <DinamicRoute exact path="/profile/:username" component={MyPost} />
        <DinamicRoute
          exact
          path="/profile/:username/images"
          component={MyFoto}
        />
        <DinamicRoute
          exact
          path="/profile/:username/friends"
          component={MyFriend}
        />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/users" component={AllUser}></Route>
        <Route exact path="/message" component={Message}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
