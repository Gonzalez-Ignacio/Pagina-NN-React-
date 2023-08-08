import React from 'react';
import Boton from './Boton';

function Cards({ img, alt, titulo, descripcion }) {
    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top"
                    src={img}
                    alt={alt}
                />
                <div className="card-body p-4">
                    {/* <div className="badge bg-primary bg-gradient rounded-pill mb-2"> <i
                        className="bi bi-heart-fill text-danger"></i> +86                                      Boton contador de Like (Falta Cambiarlo a Boton)
                    </div> */}
                    <a className="text-decoration-none link-dark stretched-link" href="#!">
                        <h5 className="card-title mb-3"> {titulo} </h5>
                    </a>
                    <p className="card-text mb-0"> {descripcion} </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="small">
                                <Boton nombreBoton={"Obtener"} />  {/* Falta agregar onClick  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
