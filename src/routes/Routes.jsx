import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from '../containers/home/Home';
import About from '../containers/about/About';
import Contact from '../containers/contact/Contact';

const Routes = () => {
   return(

        <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/about">
            <About />
            </Route>
            <Route path="/contact">
            <Contact />
            </Route>
            
        </Switch>
 
   )
}

export default Routes;