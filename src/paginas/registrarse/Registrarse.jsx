import React from 'react';
import Inputs from './componentes/Inputs';

function Registrarse() {
    
  return (
    <>
        <section className="py-5">
            <div className="container d-flex justify-content-center align-items-center px-3">
                {/* <!-- Formulario de contacto --> */}
                <div className="card bg-light rounded-3 py-5 mb-5 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <div className="text-center mb-5 mx-5">
                        <div className="feature bg-morado bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                        <h1 className="fw-bolder">Regístrate</h1>
                    </div>
                    <div className="row gx-3 justify-content-center">
                        <div className="col-10 col-lg-10 col-xl-10 px-3">
                            {/* <!-- Formulario de registro --> */}
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                {/* Inputs */}
                                <Inputs />
                                {/* <!-- Mensaje de éxito al enviar el formulario --> */}
                                {/* <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">¡Registro exitoso!</div>
                                        <p>Gracias por registrarte.</p>
                                    </div>
                                </div> */}
                                {/* <!-- Mensaje de error al enviar el formulario --> */}
                                {/* <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error al enviar el formulario.</div>
                                </div> */}
                                {/* <!-- Botón de envío --> */}
                                {/* <div className="d-grid">
                                    <button onClick={() => Inputs.handleRegistro()} className="btn btn-primary btn-lg mt-4" id="submitButton" type="button" >Registrarse</button>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Registrarse;
