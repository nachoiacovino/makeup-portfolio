import React from 'react'
import landing from './images/landing.jpg'

export default function Galeria() {
    return ( 
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={landing} alt="First slide"/ >
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={landing} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Maquillaje de novia</h5>
                            <p>...</p>
                        </div>
                    </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={landing} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Maquillaje de evento</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
        </div>
)
}
