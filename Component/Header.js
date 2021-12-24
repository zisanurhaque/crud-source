import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header(){
    return(
        <>
            <div className="header">
                <h3>Crud Application</h3>
                <div className="menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/registration">Registration</NavLink>
                </div>
            </div>
        </>
    )
}