import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
          <Posts></Posts>
          </Route>
          <Route exact path="/posts">
          <Posts></Posts>
          </Route>
          <Route path="/posts/:id">
          <PostDetail></PostDetail>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
