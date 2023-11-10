import React from 'react'
import imagen2 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/no-picture.png'
import imagen3 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/mockup-colorme-makeup.png'
import imagen4 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Chino.png';
import imagen5 from '../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Gorgory.png';
import { CarouselSwiper, Sidebar, WebClient } from './plantillasImports' 

function Plantillas() {


    // const sitiosWebDestacados = [
    //     {
    //         tituloPlantilla: "Sitios Web de Clientes",
    //         SwiperCarousel: [
    //             { imagenSwiper: `${imagen3}`, altSwiper: 'imagen3' },
    //             { imagenSwiper: `${imagen2}`, altSwiper: 'imagen2' },
    //             { imagenSwiper: `${imagen3}`, altSwiper: 'imagen3' },
    //             { imagenSwiper: `${imagen2}`, altSwiper: 'imagen2' },
    //         ]
    //     },
    // ]

    const plantillaData = [
        {
            tituloPlantilla: "Restaurante",
            classTitulo: "text-start",
            SwiperCarousel: [
                { imagenSwiper: `${imagen2}`, altSwiper: 'imagen2' },
                { imagenSwiper: `${imagen3}`, altSwiper: 'imagen1' },
                { imagenSwiper: `${imagen4}`, altSwiper: 'imagen1' },
                { imagenSwiper: `${imagen5}`, altSwiper: 'imagen2' },
                { imagenSwiper: `${imagen4}`, altSwiper: 'imagen1' },
                { imagenSwiper: `${imagen3}`, altSwiper: 'imagen2' },
            ]
        },
        // {
        //     tituloPlantilla: "Portafolio",
        //     classTitulo: "text-start",
        //     SwiperCarousel: [
        //         { imagenSwiper: `${imagen1}`, altSwiper: 'imagen1' },
        //     ]
        // },
        // {
        //     tituloPlantilla: "Bar",
        //     classTitulo: "text-start",
        //     SwiperCarousel: [
        //         { imagenSwiper: `${imagen1}`, altSwiper: 'imagen1' },
        //     ]
        // },
        // {
        //     tituloPlantilla: "Holearía",
        //     classTitulo: "text-start",
        //     SwiperCarousel: [
        //         { imagenSwiper: `${imagen1}`, altSwiper: 'imagen1' },
        //     ]
        // },
        // {
        //     tituloPlantilla: "Tienda",
        //     classTitulo: "text-start",
        //     SwiperCarousel: [
        //         { imagenSwiper: `${imagen1}`, altSwiper: 'imagen1' },
        //     ]
        // },
    ]



    return (
        <div>
            {/* Sidebar solo PC */}
            <Sidebar />
            <div id='plantilla-content'>
                {/* Banner Sitios de Clientes */}
                <WebClient />
                {/* Carousel SwiperJS Sitios Web */}
                {/* seccion 1 */}
                {/* {sitiosWebDestacados.map((sitiosWeb, index) => (
                    <CarouselSwiper
                        key={index}
                        tituloPlantilla={sitiosWeb.tituloPlantilla}
                        SwiperCarousel={sitiosWeb.SwiperCarousel}
                        classTitulo={sitiosWeb.classTitulo}
                    />
                ))} */}

                {/* seccion 2 */}
                <h2 className='text-center fw-bolder'>Plantilla</h2>

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
                        <a className="btn btn-lg btn-violeta text-white" href="#!">Contáctanos</a>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Plantillas