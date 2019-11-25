import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Marina Gómez</Link>
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
                    <li className="nav-item"><NavLink to="/sobremi">Sobre mi</NavLink></li>
                    <li className="nav-item"><NavLink to="/galeria">Galeria de fotos</NavLink></li>
                    <li className="nav-item"><NavLink to="/servicios">Servicios de maquillaje</NavLink></li>
                    <li className="nav-item"><NavLink to="/reservar-cita">Reserva tu cita</NavLink></li>
                    <li className="nav-item"><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
