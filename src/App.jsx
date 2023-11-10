import React from 'react';
// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Ruta Nav
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// Component
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
// Autentificación de Usuarios
import { useAuth } from './context/AuthProvider';
// Paginas
import { AcercaDe, Home, Plantillas, Precio, PreguntasFrecuentes, Registrarse, IniciarSesion } from './appImport';
import { Politicas } from './paginas/politicas-y-privacidad/Politicas';
import { Cookies } from './paginas/politicas-y-privacidad/cookies';


function App() {
    //Autentificación de usuario
    const { userRole } = useAuth();                                                 //Acordarse de usar {userRole === "admin/user" && (*contenido a renderizar*)}
    console.log('Nuevo userRole después del inicio de sesión:', userRole);
    return (
        <>
            <Router hashType='hashbang'>        {/* BrowserRouter as Router hace un "renombre" */}

                <header>
                    {/* Navegador */}
                    <Nav />
                </header>

                <main className='flex-shrink-0'>
                    <Routes>      
                        <Route path="/" element={<Home />} />                   
                        <Route path="/acercaDe" element={<AcercaDe />} />
                        <Route path="/precio" element={<Precio />} />
                        <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />} />
                        <Route path="/plantilla" element={<Plantillas />} />
                        <Route path="/politicasyprivacidad" element={<Politicas />} />
                        <Route path="/cookies" element={<Cookies />} />
                        <Route path="/registrarse" element={<Registrarse />} />
                        <Route path="/iniciarSesion" element={<IniciarSesion />} />
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
