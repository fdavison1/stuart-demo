import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dash from './Dash'



export default (
    <Switch>
        <Route path='/' exact component={Dash} />
    </Switch>
)