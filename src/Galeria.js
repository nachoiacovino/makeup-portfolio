import React from 'react'
import { Link } from 'react-router-dom'
import landing from './images/landing.jpg'
import gallery1 from './images/gallery1.jpg'
import gallery2 from './images/gallery2.jpg'
import gallery3 from './images/gallery3.jpg'

export default function Galeria() {
    return ( 
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 h-50" src={gallery1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 h-50" src={gallery2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 h-50" src={gallery3} alt="Third slide" />
                    <div className="carousel-caption">
                        <p><Link to="/contacto" className="btn btn-primary">Reserva tu cita</Link></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 h-50" src={landing} alt="Test" />
                    <div className="carousel-caption">
                        <h5>Maquillaje de novia</h5>
                        <p>best makeup</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Siguiente</span>
            </a>
        </div>
)
}
