'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Employee from './components/Employee'
import Departments from './components/Departments'
import DepartmentEmployees from './components/DepartmentEmployees'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Dashboard} />
            <Route path='departments' component={Departments} />
            <Route path='departments/:id/employees' component={DepartmentEmployees} />
            <Route path='employees/:id' component={Employee} />
        </Route>
    </Router>
    ), document.getElementById('app'));
