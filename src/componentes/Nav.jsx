import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import logo from '../imagenes/logos/blanco.png';
import '../css/Nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-morado  NAVBAR">
            <div className="container px-5">
                <Link to="/" className="navbar-brand"> {/* Utiliza Link en lugar de 'a' para la navegación interna */}
                    <img src={logo} className='logo-NN' alt="logo-NN" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/acercaDe" className="nav-link">Acerca de</Link> 
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/contacto" className="nav-link">Contacto</Link>  */}
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/precios" className="nav-link">Precios</Link>  */}
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/preguntasFrecuentes" className="nav-link">Preguntas Frecuentes</Link>  */}
                        </li>
                        {/* Blog comentado para futuro feature donde daremos las noticias mas Actualizadas de nuestra web  */}
                        {/* 
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownBlog" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Blog</Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                <li><Link to="/blog-home" className="dropdown-item">Blog Home</Link></li>
                                <li><Link to="/blog-post" className="dropdown-item">Blog Post</Link></li>
                            </ul>
                        </li> 
                        */}
                        <li className="nav-item">
                            {/* <Link to="/portfolio-overview" className="nav-link">Plantillas</Link>  */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
