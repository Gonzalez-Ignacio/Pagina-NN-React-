import React from 'react'

function Items({ imagenPrincipal, altImagenPrincipal, linkPrevisualizar, linkObtener, imagenSecundaria  }) {
    return (
        <div>
            <div className="carousel-item active text-center">
                <img src={imagenPrincipal} className="d-block w-100" alt={altImagenPrincipal} />

                <button className={`btn btn-violeta text-white px-2 me-5 ms-5`}>
                    <a href={linkPrevisualizar} className='text-decoration-none text-white'> Previsualizar </a>
                </button>
                <button className={`btn btn-violeta text-white px-2 ms-4`}>
                    <a href={linkObtener} className='text-decoration-none text-white'> Obtener </a>
                </button>
            </div>

            {imagenSecundaria.map((contenido, index) => (
                <div className="carousel-item" key={index}>
                    <img src={contenido.imagenSecundaria} className="d-block w-100" alt={contenido.altImagenSecundaria} />
                    <button className={`btn btn-violeta text-white px-2 me-5 ms-5`}>
                        <a href={contenido.linkPrevisualizar} className='text-decoration-none text-white'> Previsualizar </a>
                    </button>
                    <button className={`btn btn-violeta text-white px-2 ms-4`}>
                        <a href={contenido.linkObtener} className='text-decoration-none text-white'> Obtener </a>
                    </button>
                </div>
            ))}

        </div>
    )
}

export default Items