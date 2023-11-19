import React from 'react'
import Boton from '../../../../componentes/Boton'
import './../../Plantillas.css'


function CompSwiperSlide({ imagenSwiper, altSwiper, linkObtener, linkVisitarSitio }) {
    return (
        <div className='card-content'>
            <img src={imagenSwiper} alt={altSwiper} />
            <div className='btn-swiper-container mt-4'>
                <button className={`btn btn-violeta text-white px-2 ms-4`}>
                    <a href={linkObtener} target='_blank' className='text-decoration-none text-white'> Obtener </a>
                </button>
                <button className={`btn btn-violeta text-white px-2 me-0 ms-5 me-md-5 ms-md-5`}>
                    <a href={linkVisitarSitio} target='_blank' className='text-decoration-none text-white'> Visitar Sitio </a>
                </button>
            </div>
        </div>
    )
}

export default CompSwiperSlide