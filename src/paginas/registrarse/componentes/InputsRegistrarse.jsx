import React, { useState } from 'react';

function InputsRegistrarse({ }) {
    // Estados para los campos del formulario
    const [inputR, setInputR] = useState({
        nombre: "",
        apellido: "",
        email: "",
        repetirEmail: "",
        contraseña: "",
        repetirContraseña: "",
    });

    const [showMensaje, setShowMensaje] = useState({
        nombre: false,
        apellido: false,
        email: false,
        repetirEmail: false,
        contraseña: false,
        repetirContraseña: false,
    });

    //Estados para Verificación
    const [verificacionEmail, setVerificacionEmail] = useState(true);
    const [verificacionContraseña, setVerificacionContraseña] = useState(true);


    //Codigo de los Estados del formulario.
    //Evaluar si el formulario el estado del input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputR({
            ...inputR,
            [name]: value,
        });
    }
    //Mostramos mensaje en caso de que los inputR estén vacíos
    const handleShowMensaje = (mensaje) => {
        setShowMensaje({
            ...showMensaje,
            [mensaje]: inputR[mensaje] === "",
        })
    }

    // --- //

    //Verificación de Email y Contraseña
    const handleVerificarEmail = (e) => {
        const { name, value } = e.target;
        const emailValue = inputR.email                                      //inputs.email para agarrar el estado actual del input 

        //verificacion de email
        setVerificacionEmail(
            name === 'repetirEmail' &&
            emailValue.includes('@') &&
            value === emailValue
        )

    }

    const handleVerificarContraseña = (e) => {
        const { name, value } = e.target;
        const contraseñaValue = inputR.contraseña;

        // verificacion de contraseña
        setVerificacionContraseña(
            name === 'repetirContraseña' &&
            value === contraseñaValue &&
            value.length >= 8
        )
    }


    // ---------------------------------------------------------------- //
    // Fetch
    //ACA VA TODO EL FETCH

    //Funcion en el que enviaremos el formulario
    const handleRegistro = () => {
        //comprobar verificacion de email y contraseña

        //Creamos un objeto con los datos del usuario
        const userData = {                                 //Este userData lo llamaremos dentro del fetch
            name: inputR.nombre,
            lastname: inputR.apellido,
            email: inputR.email,
            password: inputR.contraseña,
        }

        fetch('http://localhost:7000/auth/signup', {
            method: 'POST',                                         // POST para enviar al servidor
            headers: {
                'Content-Type': 'application/json',                 //Solicitud tipo JSON
            },
            body: JSON.stringify(userData),                         //Obtenemos el objeto con los datos del usuario

        })
            .then(response => {
                if (response.ok) {
                    //solicitud exitosa
                    console.log("Usuario Registrado.");
                    console.log(response);
                } else {
                    //Fallo la solicitud
                    console.error("Error al registrar");
                }
            })
            .catch(error => {
                //error de red, no se pudo conectar al servidor
                console.error("Error de red", error);
            })
    }






    return (
        <div>
            {/* Nombre input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='nombre'
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    value={inputR.nombre}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("nombre")}
                />
                <label htmlFor="nombre">Nombre</label>

                {showMensaje.nombre &&
                    <p className='text-danger'> Por favor, ingrese su nombre. </p>
                }
            </div>

            {/* Apellido input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='apellido'
                    id="apellido"
                    type="text"
                    placeholder="Apellido"
                    value={inputR.apellido}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("apellido")}
                />
                <label htmlFor="apellido">Apellido</label>

                {showMensaje.apellido &&
                    <p className='text-danger'> Por favor, ingrese su Apellido. </p>
                }
            </div>

            {/* Email address input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='email'
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={inputR.email}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarEmail(e)
                    }}
                    onBlur={() => handleShowMensaje("email")}
                />
                <label htmlFor="email">Dirección de email</label>

                {showMensaje.email &&
                    <p className='text-danger'> Por favor, ingrese su email. </p>
                }
                {!verificacionEmail &&
                    <p className='text-danger'> El email no es válido o los campos no coinciden. </p>
                }
            </div>

            {/* Confirmar email address input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='repetirEmail'
                    id="confirmarEmail"
                    type="email"
                    placeholder="name@example.com"
                    value={inputR.repetirEmail}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarEmail(e)
                    }}
                    onBlur={() => handleShowMensaje("repetirEmail")}
                />
                <label htmlFor="confirmarEmail">Confirmar dirección de email</label>

                {showMensaje.repetirEmail &&
                    <p className='text-danger'> Por favor, ingrese su email. </p>
                }

                {!verificacionEmail &&
                    <p className='text-danger'> El email no es válido o los campos no coinciden. </p>
                }
            </div>

            {/* Password input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='contraseña'
                    id="contraseña"
                    type="password"
                    placeholder="Contraseña"
                    value={inputR.contraseña}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarContraseña(e)
                    }}
                    onBlur={() => handleShowMensaje("contraseña")}
                />
                <label htmlFor="contraseña">Contraseña</label>

                {showMensaje.contraseña &&
                    <p className='text-danger'> Por favor, ingrese su contraseña. </p>
                }

                {!verificacionContraseña &&
                    <p className='text-danger'> Las contraseñas no coinciden. </p>
                }
            </div>

            {/* Confirmar password input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='repetirContraseña'
                    id="repetirContraseña"
                    type="password"
                    placeholder="Repetir contraseña"
                    value={inputR.repetirContraseña}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarContraseña(e)
                    }}
                    onBlur={() => handleShowMensaje("repetirContraseña")}
                />
                <label htmlFor="repetirContraseña">Repetir contraseña</label>

                {showMensaje.repetirContraseña &&
                    <p className='text-danger'> Por favor, ingrese su contraseña. </p>
                }

                {!verificacionContraseña &&
                    <p className='text-danger'> Las contraseñas no coinciden. </p>
                }
            </div>

            <div className="d-grid">
                <button onClick={handleRegistro} className="btn btn-violeta text-white btn-lg mt-4" id="submitButton" type="button" >Registrarse</button>
            </div>
        </div>
    );
}

export default InputsRegistrarse;
