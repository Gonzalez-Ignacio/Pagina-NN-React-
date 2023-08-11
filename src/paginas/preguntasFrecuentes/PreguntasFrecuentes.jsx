import React from 'react';
import Acordeon from './componentePreguntasFrecuentes/Acordeon';

function PreguntasFrecuentes() {
    const acordeonData = [
        {
            tituloAcordeones: "Tiempos y Costos",
            PregRta: [
                {tituloPregunta: "¿Cuánto tiempo tomará desarrollar mi página web?", descripcionRespuesta: "Esta pregunta es muy común, ya que los clientes desean tener una idea clara de cuánto tiempo llevará completar su proyecto. La respuesta dependerá del alcance y la complejidad de la página web, así como de la disponibilidad de los recursos necesarios.Es importante proporcionar una estimación realista y tener en cuenta posibles retrasos." },
                { tituloPregunta: "¿Cuál es el costo de desarrollar una página web?", descripcionRespuesta: "millones de dolares" },
                { tituloPregunta: "¿Qué incluye el mantenimiento y soporte posterior al lanzamiento?", descripcionRespuesta: "sin rta" },
            ],
        },
        {
            tituloAcordeones: "Tiempos y Costos",
            PregRta: [
                {tituloPregunta: "¿Cuánto tiempo tomará desarrollar mi página web?", descripcionRespuesta: "Esta pregunta es muy común, ya que los clientes desean tener una idea clara de cuánto tiempo llevará completar su proyecto. La respuesta dependerá del alcance y la complejidad de la página web, así como de la disponibilidad de los recursos necesarios.Es importante proporcionar una estimación realista y tener en cuenta posibles retrasos." },
                { tituloPregunta: "¿Cuál es el costo de desarrollar una página web?", descripcionRespuesta: "millones de dolares" },
                { tituloPregunta: "¿Qué incluye el mantenimiento y soporte posterior al lanzamiento?", descripcionRespuesta: "sin rta" },
            ],
        },
        {
            tituloAcordeones: "Servicios post-venta",
            PregRta: [
                { tituloPregunta: "¿Cómo puedo realizar actualizaciones o cambios en mi página web una vez que esté en funcionamiento?", descripcionRespuesta: "Después de que tu página web esté en funcionamiento, es común que desees realizar actualizaciones o cambios en el contenido, diseño o funcionalidad. Puedes preguntar cómo se puede comunicar con tu equipo de desarrollo web para solicitar estos cambios y qué proceso se sigue para implementar las actualizaciones de manera eficiente." },
                { tituloPregunta: "¿Qué sucede si encuentro algún problema o error en mi página web después de su entrega?", descripcionRespuesta: "Si descubres algún problema o error en tu página web después de su entrega, es importante saber cómo puedes informar a tu proveedor de servicios para obtener asistencia. Pregunta sobre los canales de comunicación disponibles, como el correo electrónico o un sistema de tickets, y cómo se abordan los problemas para asegurarte de que recibirás un soporte oportuno y eficaz." },
                { tituloPregunta: "¿Qué opciones tengo para mejorar o expandir mi página web en el futuro?", descripcionRespuesta: "A medida que tu negocio crezca o tus necesidades cambien, es posible que desees expandir o mejorar tu página web. Pregunta sobre las opciones disponibles para realizar mejoras o agregar nuevas funcionalidades a tu sitio. Puedes explorar la posibilidad de servicios adicionales, como diseño personalizado, integración de comercio electrónico o incorporación de blogs, y cómo se puede gestionar la implementación de estas actualizaciones." },
            ],
        },
    ];

    return (
        <div>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Preguntas frecuentes</h1>
                        <p className="lead fw-normal text-muted mb-0">¿En qué podemos ayudarte?</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-xl-8">

                            {/* Acordeones */}
                            {acordeonData.map((acordeon, index) => (
                                <Acordeon
                                    key={index}
                                    tituloAcordeones={acordeon.tituloAcordeones}
                                    PregRta={acordeon.PregRta}
                                />
                            ))}
                        </div>

                        {/* Dudas y GMail */}
                        <div className="col-xl-4">
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">¿Tienes más dudas?</div>
                                            <p className="text-muted mb-4">
                                                Contactanos
                                                <br />
                                                <a href="#!">support@domain.com</a>
                                            </p>
                                            <div className="h6 fw-bolder">Síguenos!</div>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PreguntasFrecuentes;
