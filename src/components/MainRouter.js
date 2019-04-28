import React, { Component } from 'react'
import LandingPage from '../pages/LandingPage'
import {Route, Switch} from 'react-router-dom'

const main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="*" component={LandingPage}></Route>
    </Switch>

)
export default main;