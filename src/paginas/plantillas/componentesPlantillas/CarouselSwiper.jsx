import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CompSwiperSlide from './CompSwiperSlide';

function CarouselSwiper({ SwiperCarousel, tituloPlantilla, classTitulo }) {
    return (
        <div>
            <section className="mt-5">
                <div className="container px-5 my-5">
                    {/* <!-- Swiper Sitios Webs --> */}
                    <div className="text-center mb-5">
                        <h2 className={`fw-bolder ${classTitulo}`}> {tituloPlantilla} </h2>
                    </div>
                    <div className="swiper mySwiper mb-5">
                        <div className="swiper-wrapper">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation
                                loop
                                pagination={{ clickable: true, dynamicBullets: true }}
                                className='texto-no-seleccionable'
                            >
                                {SwiperCarousel.map((imagenesSwiper, index) => (
                                    <SwiperSlide
                                        key={index}
                                    >
                                        <CompSwiperSlide
                                            imagenSwiper={imagenesSwiper.imagenSwiper}
                                            altSwiper={imagenesSwiper.altSwiper}
                                        />
                                        
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CarouselSwiper;