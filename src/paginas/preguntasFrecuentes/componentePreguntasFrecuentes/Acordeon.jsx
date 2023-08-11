import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PregComp from './PregComp';

function Acordeon({ tituloAcordeones, PregRta }) {

    return (
        <div>
            <h2 className="fw-bolder mb-3">{tituloAcordeones}</h2>
            <div className="accordion mb-5" id="accordionExample">
                {PregRta.map((contenido, index) => (
                    <PregComp
                        key={index}
                        id={uuidv4()}                                                                   // Generando identificador único
                        tituloPregunta={contenido.tituloPregunta}
                        descripcionRespuesta={contenido.descripcionRespuesta}
                    />
                ))}
            </div>
        </div>
    );
}

export default Acordeon;
