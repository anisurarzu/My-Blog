import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";

import "./App.css";
import Header from "./Pages/Shared/Hedaer/Header";
import PostBlog from "./Pages/PostBlog/PostBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/postblog">
            <PostBlog></PostBlog>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
