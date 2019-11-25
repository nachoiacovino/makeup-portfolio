import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export default function Navbar2() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/" className="navbar-brand">Marina Gómez</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="Navbar mr-auto">
                    <Nav.Link><NavLink to="/sobremi">Sobre mi</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/galeria">Galeria de fotos</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/servicios">Servicios de maquillaje</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/reservar-cita">Reserva tu cita</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/contacto">Contacto</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
