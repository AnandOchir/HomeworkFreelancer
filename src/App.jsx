import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react'
import { HomeScreen, ExploreScreen, PostScreen } from './screens'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeScreen/>
        </Route>
        <Route path="/explore">
          <ExploreScreen/>
        </Route>
        <Route path="/post" exact>
          <PostScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;