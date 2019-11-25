import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export default function Navbar() {
    const handleNavbarClose = _ => {
        if (document.querySelector('.collapsed') === null) document.querySelector('.navbar-toggler-icon').click()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link onClick={handleNavbarClose} to="/" className="navbar-brand">Marina Gómez</Link>
            <button
                className='navbar-toggler'
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
                    <li className="nav-item"><NavLink onClick={handleNavbarClose} to="/sobremi">Sobre mi</NavLink></li>
                    <li className="nav-item"><NavLink onClick={handleNavbarClose} to="/galeria">Galeria de fotos</NavLink></li>
                    <li className="nav-item"><NavLink onClick={handleNavbarClose} to="/servicios">Servicios de maquillaje</NavLink></li>
                    <li className="nav-item"><NavLink onClick={handleNavbarClose} to="/reservar-cita">Reserva tu cita</NavLink></li>
                    <li className="nav-item"><NavLink onClick={handleNavbarClose} to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
