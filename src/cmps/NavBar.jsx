import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
    return <nav className="nav">
        <ul className="clean-list">
            <NavLink className="clean-list" activeClassName="active  " to='/' exact> 🏠 </NavLink>
            <NavLink className="clean-list" activeClassName="active " to='/contacts' exact> 📖 </NavLink>
            <NavLink className="clean-list" activeClassName="active " to='/contacts:id' exact>   📊 </NavLink>
        </ul>
    </nav>

}