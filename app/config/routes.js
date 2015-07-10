/**
 * Created by devin on 7/9/2015.
 */
import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import {Router, Route, DefaultRoute} from 'react-router';
import ConcTimeArray from '../components/ConcTimeArray';
import ConcTimeGroup from '../components/ConcTimeGroup';
import ConcTimeTest from '../components/ConcTimeTest';

export default (
    //whenever we hit the root of our app, render the main component
    <Route name="app" path="/" handler={Main}>
        <Route name="ctarray" path="facetct" handler={ConcTimeArray} />
		<Route name="ctgroup" path="groupct" handler={ConcTimeGroup} />
        <Route name="cttest" path="testct" handler={ConcTimeTest} />
        <DefaultRoute handler={Home} />
    </Route>
);