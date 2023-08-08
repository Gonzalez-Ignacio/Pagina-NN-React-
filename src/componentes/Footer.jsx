import React from 'react';

function Footer() {
    return (
        <footer className="bg-morado py-4 mt-auto footer">
            <div className="container px-5">
                <div className="row align-items-start justify-content-start flex-column flex-sm-row">
                    <div className="col-sm-12 col-md-2">
                        <h5 className="text-white">Servicios</h5>
                        <div className="small m-0 text-white">Hosting y dominio</div>
                        <div className="small m-0 text-white">CEO</div>
                        <div className="small m-0 text-white">Diseño web</div>
                        <div className="small m-0 text-white">Mantenimiento web</div>
                    </div>
                    <div className="col-sm-12 col-md-2 mt-3 mt-md-0">
                        <h5 className="text-white">Empresa</h5>
                        <div className="small m-0 text-white">Quienes somos</div>
                        <div className="small m-0 text-white">Colaboradores</div>
                    </div>
                    <div className="col-sm-12 col-md-2 mt-3 mt-md-0">
                        <h5 className="text-white">Soporte</h5>
                        <div className="small m-0 text-white">Contacto</div>
                        <div className="small m-0 text-white">Preguntas Frecuentes</div>
                        <div className="small m-0 text-white">Información de empresa</div>
                    </div>

                    <div className="col-sm-12 col-md-6 text-md-end mt-3 mt-md-0 text">
                        <h3 className="text-white">
                            <a href="https://wa.me/541165776749" target="_blank" className='icono-whatsapp'>
                                <i className="bi bi-whatsapp me-2 me-md-3"></i>
                            </a>
                            <a href="https://www.instagram.com/n4h92" target="_blank" className='icono-instagram'>
                                <i className="bi bi-instagram"></i>
                            </a>
                        </h3>
                        <h4 className="text-white">Desarrolladores:</h4>
                        <div className="m-0 text-white">
                            Nahuel Salvatierra <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="m-0 text-white">
                            Ignacio González <i className="bi bi-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
