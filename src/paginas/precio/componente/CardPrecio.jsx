import React from 'react';
import LiCaracteristicas from './LiCaracteristicas';


function CardPrecio({ titulo, precio, caracteristicas }) {
    return (
            <div className='card mb-5 mb-xl-0'>
                <div className='card-body p-5'>
                    <div className='text-center text-decoration-underline text-uppercase fs-5 fw-bold text-muted'>{titulo}</div>
                    <div className='mb-3'>
                        <span className='display-4 fw-bold'>${precio}</span>
                    </div>
                    <ul className='list-unstyled mb-4'>
                        {caracteristicas.map((caracteristica, index) => (                  //Le decimos que recorra las caracteristicas que están el Precio.jsx
                            <LiCaracteristicas                                             //Crea una Li por cada caracteristica que haya en  Precio.jsx
                                key={index}
                                classNameIcono={caracteristica.classNameIcono}
                                descripcion={caracteristica.descripcion}    
                                classNameLi={caracteristica.destacada ? 'text-muted' : ''}      //Si es True, colocamos Clase. Si es False, la dejamos vacía.
                            />
                        ))}
                    </ul>
                    <div className='d-grid'>
                        <a className='btn btn-violeta text-white' href='#!'>
                            Adquirir
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default CardPrecio;


