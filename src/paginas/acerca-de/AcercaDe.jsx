import React from 'react';
import Informacion from './seccionAcercaDe/Informacion';
import Miembros from './seccionAcercaDe/Miembros';

function AcercaDe() {
    return (
        <div>
            {/* Nuestra Misión */}
            <section className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3">Nuestra misión</h1>
                                <p className="lead fw-normal text-muted mb-4">
                                    Buscamos ser socios estratégicos de nuestros clientes, brindándoles un servicio de
                                    desarrollo web de calidad, orientado al éxito a largo plazo y enfocado en mantenerse a
                                    la vanguardia de las últimas tendencias y tecnologías.
                                </p>
                                <a className="btn btn-violeta text-white btn-lg" href="#scroll-target">Seguir leyendo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Informacion */}
            <Informacion />

            {/* Miembros del Equipo */}
            <Miembros />
        </div>
    );
}

export default AcercaDe;
