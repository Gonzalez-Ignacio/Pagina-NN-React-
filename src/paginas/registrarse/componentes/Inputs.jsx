import React, { useState } from 'react';

function Inputs({ }) {
    // Estados para los campos del formulario
    const [inputs, setInputs] = useState({
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
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    //Mostramos mensaje en caso de que los inputs estén vacíos
    const handleShowMensaje = (mensaje) => {
        setShowMensaje({
            ...showMensaje,
            [mensaje]: inputs[mensaje] === "",
        })
    }

    // --- //

    //Verificación de Email y Contraseña
    const handleVerificarEmail = (e) => {
        const { name, value } = e.target;
        const repetirEmailValue = inputs.repetirEmail                                      //inputs.email para agarrar el estado actual del input 

        //verificacion de email
        setVerificacionEmail(
            name === 'email' &&
            repetirEmailValue.includes('@') &&
            value === repetirEmailValue
        )

    }

    const handleVerificarContraseña = (e) => {
        const { name, value } = e.target;
        const repetirContraseñaValue = inputs.repetirContraseña;

        // verificacion de contraseña
        setVerificacionContraseña(
            name === 'contraseña' &&
            value === repetirContraseñaValue &&
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
            name: inputs.nombre,
            lastname: inputs.apellido,
            email: inputs.email,
            password: inputs.contraseña,
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
                    value={inputs.nombre}
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
                    value={inputs.apellido}
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
                    value={inputs.email}
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
                    value={inputs.repetirEmail}
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
                    value={inputs.contraseña}
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
                    value={inputs.repetirContraseña}
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
                <button onClick={handleRegistro} className="btn btn-primary btn-lg mt-4" id="submitButton" type="button" >Registrarse</button>
            </div>
        </div>
    );
}

export default Inputs;
