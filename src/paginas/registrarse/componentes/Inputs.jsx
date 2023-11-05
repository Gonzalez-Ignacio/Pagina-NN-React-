import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "./../../../api/auth.service";

function Inputs({}) {
    const signUpUser = useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            console.log("success");
        },
    });

    const [inputs, setInputs] = useState({
        name: "",
        lastname: "",
        email: "",
        repetirEmail: "",
        password: "",
        repetirContraseña: "",
    });

    const [showMensaje, setShowMensaje] = useState({
        name: false,
        lastname: false,
        email: false,
        repetirEmail: false,
        contraseña: false,
        repetirContraseña: false,
    });

    const [verificacionEmail, setVerificacionEmail] = useState(true);
    const [verificacionContraseña, setVerificacionContraseña] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleShowMensaje = (mensaje) => {
        setShowMensaje({
            ...showMensaje,
            [mensaje]: inputs[mensaje] === "",
        });
    };

    const handleVerificarEmail = (e) => {
        const { name, value } = e.target;
        setVerificacionEmail();
    };

    const handleVerificarContraseña = (e) => {
        const { name, value } = e.target;
        const repetirContraseñaValue = inputs.repetirContraseña;

        setVerificacionContraseña(
            name === "password" &&
                value === repetirContraseñaValue &&
                value.length >= 8
        );
    };

    function handleInputEmail(e) {
        handleChange(e);
        handleVerificarEmail(e);
    }

    function handlePassword(e) {
        handleChange(e);
        handleVerificarContraseña(e);
    }

    function handleSignUp(user) {
        signUpUser.mutate({ ...user });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const userData = new FormData(e.target);
        const user = Object.fromEntries(userData);
        handleSignUp(user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <InputForm/>

                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg mt-4"
                        id="submitButton"
                    >
                        Registrarse
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Inputs;
