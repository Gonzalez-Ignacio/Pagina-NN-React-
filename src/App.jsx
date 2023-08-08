import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';              // Enrutamiento. BrowserRouter utiliza la API de Historia del navegador (History API) para manipular la URL del navegador de forma que la aplicación pueda responder a los cambios de ruta (URL) y renderizar las páginas correspondientes.
import Home from './paginas/home/Home';
import Nav from './componentes/Nav'; 
import Footer from './componentes/Footer';
import AcercaDe from './paginas/acerca-de/AcercaDe';


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
