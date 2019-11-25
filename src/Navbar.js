import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import links from './navbarLinks'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export default function Navbar() {
    const handleNavbarClose = _ => {
        if (document.querySelector('[aria-expanded="false"]') === null) document.querySelector('.navbar-toggler-icon').click()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link onClick={handleNavbarClose} to="/" className="navbar-brand">Marina Gómez</Link>
            <button
                className='Navbar-icon navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="Navbar navbar-nav">
                {links.map(item => <NavLink onClick={handleNavbarClose} to={item.url} key={item.url}><li className="nav-item">{item.text}</li></NavLink>)}
                </ul>
            </div>
        </nav>
    )
}
