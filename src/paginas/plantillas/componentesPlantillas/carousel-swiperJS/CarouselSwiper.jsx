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
                    <div className="swiper-wrapper">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={5}
                            navigation
                            loop
                            // pagination={{ clickable: true, dynamicBullets: true }}
                            className='texto-no-seleccionable'
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 5,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },
                            }}
                        >
                            {SwiperCarousel.map((imagenesSwiper, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    <CompSwiperSlide
                                        imagenSwiper={imagenesSwiper.imagenSwiper}
                                        altSwiper={imagenesSwiper.altSwiper}
                                        linkVisitarSitio={imagenesSwiper.linkVisitarSitio}
                                        linkObtener={imagenesSwiper.linkObtener}
                                    />

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CarouselSwiper;