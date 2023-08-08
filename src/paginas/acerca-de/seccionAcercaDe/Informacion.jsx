import React from 'react';
import Imagen1 from '../../../imagenes/business_meeting.jpeg';
import Imagen2 from '../../../imagenes/ficha_1920x1080-copia.jpg';

function Informacion() {
    return (
        <>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={Imagen1} alt="Impulsando tu Éxito" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Impulsando tu éxito</h2>
                            <p className="lead fw-normal text-muted mb-0">
                                Nos apasiona el mundo digital y estamos dedicados a crear soluciones web excepcionales
                                que impulsen el éxito de tu negocio en línea. Nuestro enfoque se basa en la combinación
                                perfecta entre diseño atractivo, funcionalidad de vanguardia y una experiencia de
                                usuario fluida.<br />

                                Trabajamos de la mano con nuestros clientes para comprender sus necesidades y objetivos.
                                Creemos que una comunicación clara y constante es fundamental para lograr resultados
                                sobresalientes. Nuestra meta es superar tus expectativas y brindarte un servicio de
                                calidad que se destaque en el mercado. <br />

                                Nos mantenemos actualizados con las últimas tendencias y tecnologías en desarrollo web,
                                lo que nos permite ofrecerte soluciones innovadoras y adaptadas a tus requerimientos
                                específicos. Estamos comprometidos con la excelencia en cada proyecto que emprendemos.

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={Imagen2} alt="Innovación, Creatividad y Seguridad" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Innovación, creatividad y seguridad</h2>
                            <p className="lead fw-normal text-muted mb-0">
                                Nuestra pasión por la programación y el diseño nos impulsa a mejorar constantemente.
                                Valoramos la creatividad, la atención al detalle y la eficiencia. Además, nos aseguramos de
                                seguir las mejores prácticas de desarrollo web
                                y de estar al tanto de las últimas actualizaciones en seguridad.
                                <br />
                                Queremos ser tu socio confiable en la creación de tu presencia digital. Estamos listos
                                para enfrentar cualquier desafío y llevar tus ideas al siguiente nivel. Trabajaremos
                                estrechamente contigo para desarrollar una solución web que refleje la identidad única
                                de tu negocio y te posicione como líder en tu industria.
                                <br />
                                ¡Permítenos demostrarte por qué somos la elección perfecta para tus necesidades de
                                desarrollo web!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Informacion;
