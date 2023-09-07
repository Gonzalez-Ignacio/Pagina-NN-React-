import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useAuth } from '../../../context/AuthProvider';

function InputsIniciarSesion() {
    //Hook de Autentificación de usuario
    const { setUserRole  } = useAuth();
    
    // Estados para los campos del formulario
    const [inputIS, setInputIS] = useState({
        email: "",
        contraseña: "",
    });
    
    const [showMensaje, setShowMensaje] = useState({
        email: false,
        contraseña: false,
    });
    
    

    //Codigo de los Estados del formulario.
    //Evaluar si el formulario el estado del input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputIS({
            ...inputIS,
            [name]: value,
        });
    }
    //Mostramos mensaje en caso de que los inputIS estén vacíos
    const handleShowMensaje = (mensaje) => {
        setShowMensaje({
            ...showMensaje,
            [mensaje]: inputIS[mensaje] === "",
        })
    }


    //---------------------------------------------------------------- //
    // Fetch
    const handleIniciarSesion = () => {
        // Ojb de Usuario
        const userDataLogin = {                                         //datos para fetch
            email: inputIS.email,
            password: inputIS.contraseña,
        }

        // Fetch
        fetch('http://localhost:7000/auth/login', {                     //Cambio de url
            method: 'POST',                                         
            headers: {
                'Content-Type': 'application/json',                 
            },
            body: JSON.stringify(userDataLogin),                        //recibe los datos
        })
        //Respuesta del servidor
        .then (response => {
            if(response.ok) {
                console.log("inicio de sesión exitoso");
                console.log(response);
                return response.json();
            } else {
                console.log("Fallo en el inicio de sesión");
            }
        })
        //Autentificación del usuario
        .then((data) => {                                  
            console.log("mostramos los datos")             

            //Token
            console.log("ver los datos:", data)             //Datos del ID y Token obtenidos
            const token = data.token;                       //obtener token
            const decodedToken = jwt_decode(token);         //descifrado

            
            if(decodedToken) {          
                const usuarioRol = {
                    email: inputIS.email,
                    role: decodedToken.role,
                }        //obtener Email y rol
                window.localStorage.setItem(
                    "loguearUsuario", JSON.stringify(usuarioRol)     //LocalStorage se transforma a string y obtenemos el rol del usuario. "loguearUsuario" es el ID que llamaremos en userEffect para que guarde al usuario
                )

                
                setUserRole(usuarioRol.role);                    //Usamos el estado del hook personalizado donde actualizamos el estado del rol del usuario.
                
            } else {
                console.log("Token no valido")              //MANDAR ALGÚN MSJ DE ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        })
        .catch (error => {
            console.log("Error de red", error);
        })
    }




    // Retornamos lo que mostramos en pantalla 

    return (
        <div>
            {/* Email address input */}
            <div className="form-floating mb-4 mt-4">
                <input
                    className="form-control"
                    name='email'
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={inputIS.email}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("email")}
                />
                <label htmlFor="email">Dirección de email</label>

                {showMensaje.email &&
                    <p className='text-danger'> Por favor, ingrese su email. </p>
                }
            </div>


            {/* Password input */}
            <div className="form-floating mb-4">
                <input
                    className="form-control"
                    name='contraseña'
                    id="contraseña"
                    type="password"
                    placeholder="Contraseña"
                    value={inputIS.contraseña}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("contraseña")}
                />
                <label htmlFor="contraseña">Contraseña</label>

                {showMensaje.contraseña &&
                    <p className='text-danger'> Por favor, ingrese su contraseña. </p>
                }
            </div>

           

            <div className="d-grid">
                <button onClick={handleIniciarSesion} className="btn btn-violeta text-white btn-lg mb-4 mt-4" id="submitButton" type="button" >Iniciar Sesión</button>
            </div>
        </div>
    );
}

export default InputsIniciarSesion



