import React from 'react'
import './WebClient.css'
import imgWebClientBannerMd from './../../../../imagenes/banner-plantillas/Banner-Plantilla-5.png'
import imgWebClientBannerSm from './../../../../imagenes/banner-plantillas/Banner-Plantilla-sm.png'
import imagen1 from '../../../../imagenes/composicion-aislada-tablet-laptop-smartphone/mockup-colorme-makeup.png';
import imagen2 from '../../../../imagenes/composicion-aislada-tablet-laptop-smartphone/mockup-equipo-libreando.png';
import Items from './items/Items';

function WebClient() {
    const sitiosWebClient = [
        {
            imagenPrincipal: imagen1,
            altImagenPrincipal: 'esta es la imagen responsive de colormemakeup.art',
            linkPrevisualizar: 'https://colormemakeup.art/',
            linkObtener: 'https://forms.gle/4TpkGPA6ZhyS2Cen9',
            imagenSecundaria: [
                { imagenSecundaria: imagen2, altImagenSecundaria: 'esta es la imagen responsive de libreando.ar', linkPrevisualizar: 'https://libreando.ar/', linkObtener: 'https://forms.gle/4TpkGPA6ZhyS2Cen9' },
            ]
        },
    ]


    return (
        <div className='mb-5 position-relative'>
            <div className="d-block"> {/* Solo visible en tamaños pequeños */}
                <img src={imgWebClientBannerSm} alt="Banner de plantilla para nuestros clientes." className='d-md-none img-web-client' />
                <img src={imgWebClientBannerMd} alt="Banner de plantilla para nuestros clientes." className='d-none d-md-block img-web-client' />
            </div>
            <div className="col-xl-5 col-xxl-6 d-xl-block text-center position-absolute top-0 start-50 carousel-container">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        {sitiosWebClient.map((WebClient, index) => (
                            <Items
                                key={index}
                                imagenPrincipal={WebClient.imagenPrincipal}
                                altImagenPrincipal={WebClient.altImagenPrincipal}
                                linkPrevisualizar={WebClient.linkPrevisualizar}
                                linkObtener={WebClient.linkObtener}
                                imagenSecundaria={WebClient.imagenSecundaria}
                            />
                        ))}
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