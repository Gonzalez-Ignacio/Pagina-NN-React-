import { Link } from 'react-router-dom';
import { React } from 'react';

function Footer() {

        const handleLinkClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
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
                        <div><Link onClick={handleLinkClick} to="/acercaDe" className="smooth-scroll-link small m-0 text-white text-decoration-none">Quienes somos</Link></div>
                        <div className="small m-0 text-white">Colaboradores</div>
                        <div className="small m-0 text-white">Contacto</div>
                    </div>
                    <div className="col-sm-12 col-md-2 mt-3 mt-md-0">
                        <h5 className="text-white">Soporte</h5>

                        <div><Link onClick={handleLinkClick} to="/preguntasFrecuentes" className="smooth-scroll-link small m-0 text-white text-decoration-none">Preguntas Frecuentes</Link></div>
                        <div className="small m-0 text-white">Información de empresa</div>
                        <div><Link onClick={handleLinkClick} to="/politicasyprivacidad" className="smooth-scroll-link small m-0 text-white text-decoration-none">Políticas y privacidad</Link></div>
                        <div><Link onClick={handleLinkClick} to="/cookies" className="smooth-scroll-link small m-0 text-white text-decoration-none">Políticas de cookies</Link></div>
                    </div>

                    <div className="col-sm-12 col-md-6 text-md-end mt-3 mt-md-0 text">
                        <h3 className="text-white">
                            <a href="https://wa.me/541165776749" target="_blank" className='icono-whatsapp'>
                                <i className="bi bi-whatsapp me-2 me-md-3"></i>
                            </a>
                            <a href="https://www.instagram.com/nns.digital/" target="_blank" className='icono-instagram'>
                                <i className="bi bi-instagram"></i>
                            </a>
                        </h3>
                        <h4 className="text-white">Desarrolladores:</h4>
                        <div className="m-0 text-white"><a target='blank' href="https://www.linkedin.com/in/nahu-dev/"  className='text-decoration-none text-white'>Nahuel Salvatierra </a><i className="bi bi-linkedin"></i>
                        </div>
                        <div className="m-0 text-white"><a href="https://www.linkedin.com/in/ignacio-l-gonzalez" target='_blank' className='text-decoration-none text-white'>Ignacio González </a>
                            <i className="bi bi-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
