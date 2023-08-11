import React, { useState } from 'react';

function PregComp({ id, tituloPregunta, descripcionRespuesta }) {
    const [abierto] = useState(false);          //Controlamos con useState si esta abierto o no.       useState(false)=no esta abierto por defecto



    return (
        <div className="accordion-item">
            <h3 className="accordion-header" id={`headingOne${id}`}>
                <button
                    className="accordion-button collapsed"
                    type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${id}`}
                    aria-expanded="false" aria-controls={`collapseOne${id}`}
                >
                    {tituloPregunta}
                </button>
            </h3>
            <div className={`accordion-collapse collapse ${abierto ? 'show' : ''}`} id={`collapseOne${id}`}         //Controlamos si esta abierto, si esta abierto se muestra
                aria-labelledby={`headingOne${id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {descripcionRespuesta}
                </div>
            </div>
        </div>
    );
}

export default PregComp;
