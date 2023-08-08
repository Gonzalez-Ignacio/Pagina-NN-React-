import React from 'react'

function Boton({nombreBoton, onClick, className, type = 'button'}) {
    return (
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start ">
            <button type={type} className={`btn btn-violeta text-white px-2  ${className}`} onClick={onClick}> {nombreBoton} </button>
        </div>
    )
}

export default Boton