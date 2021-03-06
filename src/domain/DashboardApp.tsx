import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/dashboard`} component={Dashboard} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('logmanager-main-container')
    );
  }, 100);
}