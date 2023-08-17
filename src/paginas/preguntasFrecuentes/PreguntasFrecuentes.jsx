import React from 'react';
import Acordeon from './componentePreguntasFrecuentes/Acordeon';
import './PreguntaFrecuente.css'

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
            tituloAcordeones: "Tiempos y Costosasd",
            PregRta: [
                {tituloPregunta: "¿Cuánto asdasdtiempo tomará desarrollar mi página web?", descripcionRespuesta: "Esta preguasdasdnta es muy común, ya que los clientes desean tener una idea clara de cuánto tiempo llevará completar su proyecto. La respuesta dependerá del alcance y la complejidad de la página web, así como de la disponibilidad de los recursos necesarios.Es importante proporcionar una estimación realista y tener en cuenta posibles retrasos." },
                { tituloPregunta: "¿Cuál es elasdasd costo de desarrollar una página web?", descripcionRespuesta: "milloneasdasds de dolares" },
                { tituloPregunta: "¿Qué incluyasdasde el mantenimiento y soporte posterior al lanzamiento?", descripcionRespuesta: "siasdasdn rta" },
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
