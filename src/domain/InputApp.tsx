import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Input } from './input';
import { config } from '../config';

export default function init() {
  console.log("Second call");
  setTimeout(function () {
    ReactDOM.render(
      
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/input`} component={Input} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('logmanager-main-container')
    );
  }, 100);
}