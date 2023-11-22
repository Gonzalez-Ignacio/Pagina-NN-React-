import React from 'react'
// import imagen2 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/no-picture.png'
// import imagen3 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/mockup-colorme-makeup.png'
import imagen1 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Chino.png';
import imagen2 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Gorgory.png';
import { CarouselSwiper, Sidebar, WebClient } from './plantillasImports' 

function Plantillas() {


    const plantillaData = [
        {
            tituloPlantilla: "Restaurante",
            classTitulo: "text-start",
            SwiperCarousel: [
                { imagenSwiper: `${imagen1}`, altSwiper: 'Resto Chino', linkObtener: 'https://forms.gle/4TpkGPA6ZhyS2Cen9', linkVisitarSitio: 'https://gonzalez-ignacio.github.io/BA-UTN/' },
                { imagenSwiper: `${imagen2}`, altSwiper: 'Resto bar Gorgory Burger', linkObtener: 'https://forms.gle/4TpkGPA6ZhyS2Cen9', linkVisitarSitio: 'https://facucugliari.github.io/' },

            ]
        },
    ]

    return (
        <div>
            {/* Sidebar solo PC */}
            {/* <Sidebar /> */}
            <div id='plantilla-content'>
                {/* Banner Sitios de Clientes */}
                <WebClient />

                {/* seccion 2 */}
                <h2 className='text-center fw-bolder'>Páginas</h2>

                {plantillaData.map((carousel, index) => (
                    <CarouselSwiper
                        key={index}
                        tituloPlantilla={carousel.tituloPlantilla}
                        SwiperCarousel={carousel.SwiperCarousel}
                        classTitulo={carousel.classTitulo}
                    />
                ))}

                {/* Contactanos */}
                <section className="py-5 bg-light">
                    <div className="container px-5 my-5">
                        <h2 className="display-4 fw-bolder mb-4">Construyamos algo juntos</h2>
                        <a className="btn btn-lg btn-violeta text-white" href="https://www.instagram.com/nns.digital/" target='_blank'>Contáctanos</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Plantillas