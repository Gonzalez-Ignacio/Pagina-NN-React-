import React, { useState } from 'react';

function InputsIniciarSesion() {

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
        .then (response => {
            if(response.ok) {
                console.log("inicio de sesión exitoso");
                console.log(response);
            } else {
                console.log("Fallo en el inicio de sesión");
            }
        })
        .catch (error => {
            console.log("Error de red", error);
        })
    }






    return (
        <div>
            {/* Email address input */}
            <div className="form-floating mb-3">
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
            <div className="form-floating mb-3">
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
                <button onClick={handleIniciarSesion} className="btn btn-primary btn-lg mt-4" id="submitButton" type="button" >Registrarse</button>
            </div>
        </div>
    );
}

export default InputsIniciarSesion



