import React from 'react'
import '../Home.css'

function Beneficios() {
    return (
        <section className="py-5" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h2 className="fw-bolder fs-1 mb-0">El mundo verá tu huella y también:</h2>
                    </div>
                    <div className="col-lg-8">
                        <div className="row gx-5 row-cols-1 row-cols-md-2">
                            <div className="col mb-5 h-100">
                                <div className="feature bg-morado bg-gradient text-white rounded-3 mb-3">
                                    <i className="bi bi-globe"></i>
                                </div>
                                <h2 className="h5">Presencia en línea profesional:</h2>
                                <p className="mb-0">Una página web bien diseñada y funcional proporciona una presencia en
                                    línea profesional y creíble para tu negocio.
                                    Te permite mostrar tus productos, servicios o ideas de manera atractiva,
                                    llegar a una audiencia más amplia y establecer confianza con los clientes
                                    potenciales.</p>
                            </div>
                            <div className="col mb-5 h-100">
                                <div className="feature bg-morado bg-gradient text-white rounded-3 mb-3">
                                    <i className="bi bi-clock"></i>
                                </div>
                                <h2 className="h5">Ahorro de tiempo y recursos:</h2>
                                <p className="mb-0">Una página web te permite ahorrar tiempo y recursos en comparación con
                                    el desarrollo desde cero.
                                    En lugar de invertir semanas o meses en diseño y programación,
                                    puedes adquirir una página web existente que ya cumple con tus necesidades y
                                    comenzar a utilizarla de inmediato.
                                </p>
                            </div>
                            <div className="col mb-5 mb-md-0 h-100">
                                <div className="feature bg-morado bg-gradient text-white rounded-3 mb-3">
                                    <i className="bi bi-pencil-square"></i>
                                </div>
                                <h2 className="h5">Personalización y adaptabilidad:</h2>
                                <p className="mb-0">Tienes la opción de personalizarla según tus requisitos específicos.
                                    Puedes colaborar con el desarrollador para realizar modificaciones en el diseño, la
                                    funcionalidad y el contenido,
                                    adaptándola perfectamente a tu marca y objetivos comerciales.
                                </p>
                            </div>
                            <div className="col h-100">
                                <div className="feature bg-morado bg-gradient text-white rounded-3 mb-3">
                                    <i className="bi bi-megaphone"></i>
                                </div>
                                <h2 className="h5">Promoción y marketing efectivo:</h2>
                                <p className="mb-0">Una página web te permite promocionar tus productos o servicios de
                                    manera efectiva. Puedes mostrar tu catálogo, ofrecer información detallada, publicar
                                    contenido relevante y utilizar estrategias de marketing digital para llegar a tu
                                    público objetivo de forma más precisa y personalizada.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Beneficios