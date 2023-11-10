import React from 'react'
import './WebClient.css'
import imgWebClient from './../../../imagenes/banner-plantillas/Banner-Plantilla.png'
import imagen1 from '../../../imagenes/composicion-aislada-tablet-laptop-smartphone/mockup-colorme-makeup.png';
import imagen2 from '../../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Chino.png';
import imagen3 from '../../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Gorgory.png';

function WebClient() {
    return (
        <div className='position-relative mb-5'>
            <img src={imgWebClient} alt="Banner de plantilla para nuestros clientes." className='img-web-client' />
            <div className="col-xl-5 col-xxl-6 d-xl-block text-center position-absolute top-0 start-50 ">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imagen1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={imagen2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={imagen3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WebClient