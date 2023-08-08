import React from 'react';

function Miembros() {
    return (
        <div>
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Nuestro equipo</h2>
                        <p className="lead fw-normal text-muted mb-5">Creando soluciones detrás de escena.</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4"
                                    src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Ignacio González</h5>
                                <div className="fst-italic text-muted">Desarrollador web Full Stack</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4"
                                    src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Nahuel Salvatierra</h5>
                                <div className="fst-italic text-muted">Desarrollador web Full Stack</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4"
                                    src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">María López</h5>
                                <div className="fst-italic text-muted">Marketing Digital</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Miembros;
