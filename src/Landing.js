import React from 'react'
import landing from './images/landing.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Landing.css'

export default function Landing() {
    return (
            
        <div style={{width: "90vw"}} className="card mx-auto">
            {/* <img className="img-fluid" src={landing} alt="Chica maquillada"/> */}
            <img src={landing}  className="card-img-top" alt="Chica maquillada" />
            <div class="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/contacto" className="btn btn-primary">Reserva tu cita</a>
            </div>
        </div>
    )
}
