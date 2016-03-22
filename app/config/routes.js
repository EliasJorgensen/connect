import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'; //use browserHistory in prod

// import components
import Main from 'components/Main';
import PromptContainer from 'containers/PromptContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PromptContainer} />
    </Route>
  </Router>
);

export default routes;
