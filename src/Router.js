import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Calculator from "./Calculator";
import EssayForm from "./EssayForm";


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/Calculator" component={Calculator}/>
      <Route exact path="/EssayForm" component={EssayForm}/>
    </Switch>
  </HashRouter>
);


export default BasicRoute;
