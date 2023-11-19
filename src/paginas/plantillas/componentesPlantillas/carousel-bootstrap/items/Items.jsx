import React from 'react'

function Items({ imagenPrincipal, altImagenPrincipal, linkPrevisualizar, linkObtener, imagenSecundaria  }) {
    return (
        <div>
            <div className="carousel-item active text-center mb-3">
                <img src={imagenPrincipal} className="d-block w-100" alt={altImagenPrincipal} />

                <button className={`btn btn-violeta text-white px-2 ms-4`}>
                    <a href={linkObtener} target='_blank' className='text-decoration-none text-white'> Obtener </a>
                </button>
                <button className={`btn btn-violeta text-white px-2 me-0 ms-5 me-md-5 ms-md-5`}>
                    <a href={linkPrevisualizar} target='_blank' className='text-decoration-none text-white'> Visitar Sitio </a>
                </button>
            </div>

            {imagenSecundaria.map((contenido, index) => (
                <div className="carousel-item mb-3" key={index}>
                    <img src={contenido.imagenSecundaria} className="d-block w-100" alt={contenido.altImagenSecundaria} />
                    
                    <button className={`btn btn-violeta text-white px-2 ms-4`}>
                        <a href={contenido.linkObtener} target='_blank' className='text-decoration-none text-white'> Obtener </a>
                    </button>
                    <button className={`btn btn-violeta text-white px-2 me-0 ms-0 me-md-5 ms-md-5`}>
                        <a href={contenido.linkPrevisualizar} target='_blank' className='text-decoration-none text-white'> Visitar Sitio </a>
                    </button>
                </div>
            ))}

        </div>
    )
}

export default Items