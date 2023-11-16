import React from 'react'
import Boton from '../../../../componentes/Boton'
import './../../Plantillas.css'


function CompSwiperSlide({imagenSwiper, altSwiper }) {
    return (
        <div className='card-content'>
            <img src={imagenSwiper} alt={altSwiper} />
            <div className='btn-swiper-container mt-4'>
                <Boton nombreBoton="Previsualización" className="btnSwiper" />
                <Boton nombreBoton="Obtener" className="btnSwiper"  />
            </div>
        </div>
    )
}

export default CompSwiperSlide