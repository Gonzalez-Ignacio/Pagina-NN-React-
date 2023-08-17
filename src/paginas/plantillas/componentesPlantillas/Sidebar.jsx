import React, { useEffect } from 'react';
import './../Plantillas.css'
import LogoNN from '../../../imagenes/logos/blanco.png'

function Sidebar() {

    useEffect(() => {
        const toggleIcon = document.querySelector('.toggle-icon');
        const sidebar = document.querySelector('.sidebar');
        const searchBtn = document.querySelector('.search-box');
        const scrollThreshold = 60;

        const toggleSidebar = () => {
            sidebar.classList.toggle('close');
        };

        const openSidebar = () => {
            sidebar.classList.remove('close');
        };

        const showSidebarOnScroll = () => {
            if (window.scrollY > scrollThreshold) {
                sidebar.classList.remove('hidden');
            } else {
                sidebar.classList.add('hidden');
            }
        };

        toggleIcon.addEventListener('click', toggleSidebar);
        searchBtn.addEventListener('click', openSidebar);
        window.addEventListener('scroll', showSidebarOnScroll);

        // Con esto limpiamos los event listener. en caso de no ponerlo, los event listeners siguen abiertos pudiendo generar problemas inesperados.
        return () => {
            toggleIcon.removeEventListener('click', toggleSidebar);
            searchBtn.removeEventListener('click', openSidebar);
            window.removeEventListener('scroll', showSidebarOnScroll);
        };
    }, []);     //investigar el uno de "[]" porque también se puede sacar o agregar "[value]".



    return (
        <div>
            <section className="sidebar close hidden">
                <header>
                    <div className="imagen-texto-sidebar">
                        <span className="imagen-sidebar">
                            <img src={LogoNN} alt="logo" />
                        </span>

                        <div className="texto header-texto">
                            <span className="nombre text-center">NN</span>
                            <br />
                            <span className="profesion">Soluciones Digitales</span>
                        </div>

                        <i className="bi bi-arrow-right toggle-icon"></i>
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menues">
                        <h2 className="texto-titulo text-center"> Plantillas </h2>

                        <li className="search-box">
                            <i className="bi bi-search icon-sidebar"></i>
                            <input type="text" placeholder="Buscar..." />
                        </li>

                        <ul className="menu-links">
                            <li className="sidebar-link">
                                <a href="#">
                                    <i className="bi bi-house icon-sidebar"></i>
                                    <span className="texto texto-sidebar">Restaurante</span>
                                </a>
                            </li>

                            <li className="sidebar-link">
                                <a href="#">
                                    <i className="bi bi-house icon-sidebar"></i>
                                    <span className="texto texto-sidebar">Portafolio</span>
                                </a>
                            </li>

                            <li className="sidebar-link">
                                <a href="#">
                                    <i className="bi bi-house icon-sidebar"></i>
                                    <span className="texto texto-sidebar">Bar</span>
                                </a>
                            </li>

                            <li className="sidebar-link">
                                <a href="#">
                                    <i className="bi bi-house icon-sidebar"></i>
                                    <span className="texto texto-sidebar">Hoteleria</span>
                                </a>
                            </li>

                            <li className="sidebar-link">
                                <a href="#">
                                    <i className="bi bi-house icon-sidebar"></i>
                                    <span className="texto texto-sidebar">Tienda</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Sidebar