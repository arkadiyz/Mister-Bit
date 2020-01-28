import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
    return <nav>
        <ul ClassName="clin-list">
            <NavLink activeClassName="active" to='/' exact>Home </NavLink>
            <NavLink activeClassName="active" to='/contacts' exact> Contact </NavLink>
        </ul>
    </nav>

}