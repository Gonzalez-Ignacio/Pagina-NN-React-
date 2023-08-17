import React from 'react';
// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Ruta Nav
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';              // Enrutamiento. BrowserRouter utiliza la API de Historia del navegador (History API) para manipular la URL del navegador de forma que la aplicación pueda responder a los cambios de ruta (URL) y renderizar las páginas correspondientes.
// Component
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
// Paginas
import Home from './paginas/home/Home';
import AcercaDe from './paginas/acerca-de/AcercaDe';
import Precio from './paginas/precio/Precio';
import PreguntasFrecuentes from './paginas/preguntasFrecuentes/PreguntasFrecuentes';
import Plantillas from './paginas/plantillas/Plantillas';
import { Politicas } from './paginas/politicas-y-privacidad/Politicas';



function App() {
    return (
        <>
            <Router>        {/* BrowserRouter as Router hace un "renombre" */}

                <header>
                    {/* Navegador */}
                    <Nav />
                </header>

                <main className='flex-shrink-0'>
                    <Routes>       {/* Si no lo usamos, se renderiza toda la pagina principal y pagina que renderizaremos */}
                        <Route path="/" element={<Home />} />                   {/* Definimos las rutas. */}
                        <Route path="/acercaDe" element={<AcercaDe />} />
                        <Route path="/precio" element={<Precio />} />
                        <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />} />
                        <Route path="/plantilla" element={<Plantillas />} />
                        <Route path="/politicasyprivacidad" element={<Politicas/>} />
                    </Routes>

                </main>

                <footer>
                    {/* Footer */}
                    <Footer />
                </footer>

            </Router>
        </>
    );
}


export default App;
