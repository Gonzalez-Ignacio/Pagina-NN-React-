import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PregComp from './PregComp';

function Acordeon({ tituloAcordeones, PregRta }) {
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);               //Se le indica que no hay ninguna pregunta abierta.

    const togglePregunta = (index) => {                                 
        if (preguntaAbierta === index) {                                        //Si preguntaAbierta esta abierta, la llamamos index
            setPreguntaAbierta(null);                                           //Si la pregunta esta abierta, la cerramos.
        } else {
            setPreguntaAbierta(index);                                          //Si la pregunta esta cerrada, la abrimos.
        }
    };

    return (
        <div>
            <h2 className="fw-bolder mb-3">{tituloAcordeones}</h2>
            <div className="accordion mb-5" id="accordionExample">
                {PregRta.map((contenido, index) => (
                    <PregComp
                        key={index}
                        id={uuidv4()}                                                              // Generando identificador único
                        tituloPregunta={contenido.tituloPregunta}
                        descripcionRespuesta={contenido.descripcionRespuesta}
                        abierto={preguntaAbierta === index}                                        //viene del parámetro y preguntamos "esta abierto?"
                        onToggle={() => togglePregunta(index)}                                     //controlamos la acción con togglePregunta(estadoActual)
                    />
                ))}
            </div>
        </div>
    );
}

export default Acordeon;


// useState indica que todas las preguntas estan cerradas. Cuando usamos el "togglePregunta", le decimos "preguntaAbierta esta abierta". 
// Entonces si esta abierta, cerrala(null), sino abrila