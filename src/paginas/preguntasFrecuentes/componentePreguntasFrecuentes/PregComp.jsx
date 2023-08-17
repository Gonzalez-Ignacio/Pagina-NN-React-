import React from 'react';
import '../PreguntaFrecuente.css';

function PregComp({ id, tituloPregunta, descripcionRespuesta, abierto, onToggle }) {
    const collapseId = `collapse-${id}`; // Generar un identificador único para el colapso

    return (
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button
                    className={`accordion-button ${abierto ? '' : 'collapsed'}`}
                    data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} // Usar el identificador único
                    type="button"
                    onClick={onToggle}
                >
                    {tituloPregunta}
                </button>
            </h3>
            <div className={`accordion-collapse collapse ${abierto ? 'show' : ''}`} id={collapseId}>
                <div className="accordion-body">
                    {descripcionRespuesta}
                </div>
            </div>
        </div>
    );
}

export default PregComp;
