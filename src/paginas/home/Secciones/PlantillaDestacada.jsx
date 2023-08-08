import React, { useState, useEffect } from 'react';
import '../Home.css';
import Cards from '../../../componentes/Footer';
import Boton from '../../../componentes/Boton';

function PlantillaDestacada() {

    const [plantillas, setPlantillas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/plantillas')
            .then((response) => response.json())
            .then((data) => setPlantillas(data))
            .catch((error) => console.error('Error al obtener las plantillas:', error));
    }, []);

    return (
        <section className="py-5" id="plantillas-destacadas">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h2 className="fw-bolder">Plantillas Destacadas</h2>
                            <p className="lead fw-normal text-muted mb-5">
                                Aquí están las plantillas mas destacadas por la comunidad
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards para Plantillas destacadas  */}
                <div className="row gx-5">
                    {plantillas.map((plantilla) => (
                        <Cards key={plantilla.id} img={plantilla.imagen} alt={plantilla.alts} titulo={plantilla.titulos} descripcion={plantilla.descripciones} />
                    ))}
                </div>
                {/* Call to action */}
                <aside className="bg-morado bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                    <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                        <div className="mb-4 mb-xl-0">
                            <div className="fs-3 fw-bold text-white">Recibí la ultimas novedades!</div>
                            <div className="text-white-50">Regístrate en nuestro boletín informativo para recibir las
                                últimas actualizaciones.
                            </div>
                        </div>
                        <div className="ms-xl-4">
                            <div className="input-group mb-2">
                                <input className="form-control" type="text" placeholder="Dirección de email..."
                                    aria-label="Email address..." aria-describedby="button-newsletter"
                                />
                                <Boton nombreBoton="Enviar" type='submit' className={"btn-enviar"} />          {/* Falta agregar onClick */}
                            </div>
                            <div className="small text-white-50">Nos importa la privacidad y nunca compartiremos tus datos.</div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default PlantillaDestacada;
