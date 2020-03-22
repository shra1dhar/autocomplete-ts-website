import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home';

function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="profile/*" element={<Profile />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;

