export default function InputForm (){
<div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Nombre"
                        value={inputs.name}
                        onChange={handleChange}
                        onBlur={() => handleShowMensaje("nombre")}
                    />
                    <label htmlFor="name">Nombre</label>

                    {showMensaje.name && (
                        <p className="text-danger">
                            Por favor, ingrese su nombre.
                        </p>
                    )}
                </div>

                {/* Apellido input */}
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        type="text"
                        placeholder="Apellido"
                        value={inputs.lastname}
                        onChange={handleChange}
                        onBlur={() => handleShowMensaje("apellido")}
                    />
                    <label htmlFor="lastname">Apellido</label>

                    {showMensaje.lastname && (
                        <p className="text-danger">
                            Por favor, ingrese su Apellido.
                        </p>
                    )}
                </div>

                {/* Email address input */}
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={inputs.email}
                        onChange={handleInputEmail}
                        onBlur={() => handleShowMensaje("email")}
                    />
                    <label htmlFor="email">Dirección de email</label>

                    {showMensaje.email && (
                        <p className="text-danger">
                            {" "}
                            Por favor, ingrese su email.{" "}
                        </p>
                    )}
                    {!verificacionEmail && (
                        <p className="text-danger">
                            {" "}
                            El email no es válido o los campos no coinciden.{" "}
                        </p>
                    )}
                </div>

                {/* Password input */}
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        value={inputs.password}
                        onChange={handlePassword}
                        onBlur={() => handleShowMensaje("contraseña")}
                    />
                    <label htmlFor="password">Contraseña</label>

                    {showMensaje.contraseña && (
                        <p className="text-danger">
                            {" "}
                            Por favor, ingrese su contraseña.{" "}
                        </p>
                    )}

                    {!verificacionContraseña && (
                        <p className="text-danger">
                            {" "}
                            Las contraseñas no coinciden.{" "}
                        </p>
                    )}
                </div>

                {/* Confirmar password input */}
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="repetirContraseña"
                        id="repetirContraseña"
                        type="password"
                        placeholder="Repetir contraseña"
                        value={inputs.repetirContraseña}
                        onChange={handlePassword}
                        onBlur={() => handleShowMensaje("repetirContraseña")}
                    />
                    <label htmlFor="repetirContraseña">
                        Repetir contraseña
                    </label>

                    {showMensaje.repetirContraseña && (
                        <p className="text-danger">
                            {" "}
                            Por favor, ingrese su contraseña.{" "}
                        </p>
                    )}

                    {!verificacionContraseña && (
                        <p className="text-danger">
                            {" "}
                            Las contraseñas no coinciden.{" "}
                        </p>
                    )}
                </div>
}