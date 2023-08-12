import React from 'react';
import '../PreguntaFrecuente.css'

function PregComp({tituloPregunta, descripcionRespuesta, abierto, onToggle }) {
    return (
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button
                    className={`accordion-button ${abierto ? '' : 'collapsed'}`}        //Si esta abierto, no le damos ninguna clase, sino lo cerramos (con esto controlamos en el togglePregunta)
                    type="button"
                    onClick={onToggle}                                                  // Controlamos el estado de abierto/cerrado.
                >
                    {tituloPregunta}
                </button>
            </h3>
            <div className={`accordion-collapse collapse ${abierto ? 'show' : ''}`}>    {/* Mostramos/Ocultamos según si esta abierto o collapsed*/}
                <div className="accordion-body">
                    {descripcionRespuesta}
                </div>
            </div>
        </div>
    );
}

export default PregComp;
