import React from 'react';
import { Route } from 'react-router';
import Main from '../Pages/Main';
import Registration from '../Pages/Registration';
import Users from '../Pages/Users';

const Routes = () => {
    return(
        <>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route exact path="/users">
                <Users/>
            </Route>
            <Route exact path="/registration">
                <Registration/>
            </Route>
        </>
    )
}

export default Routes;