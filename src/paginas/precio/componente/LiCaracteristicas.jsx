import React from 'react'

function LiCaracteristicas({ classNameIcono, descripcion, classNameLi }) {
    return (
        <li className={`mb-2 ${classNameLi}`}>
            <span className={classNameIcono}></span> {descripcion}
        </li>
    );
}

export default LiCaracteristicas


// Componente Precio:
// Creamos un objeto cardsData que contiene las caracteristicas, el titulo y el precio al que le queremos dar a las Cards. 
// Creamos el .map para que que itere en cada uno de los objetos y le pasamos el componente de la Card, 
// para que de esta forma cree una carta para cada uno de los objetos.


// Componente CardsPrecio:
// Creamos un .map donde va a iterar por cada una de las caracteristicas que le dimos al Obj que esta en el componente Padre, 
// creando un "li" desde el componente de "LiCaracteristicas" y le pasamos por parámetro la descripcion, icono y si lleva o no una clase extra ("destacada").


// Componente LiCaracteristicas:
// Le pasamos la "li" que contiene la clase "classNameLi" que es donde decidimos o no pasarle el text-muted" 
// y a su vez le pasamos el "classNameIcono" y "Descripcion" que están desde el "componente Precio" 

