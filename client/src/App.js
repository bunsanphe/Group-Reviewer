import React from "react";
import { useAuthTokenStore } from "./utils/auth";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";

function App() {
  useAuthTokenStore();
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/feed" component={Feed}/>
          <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;