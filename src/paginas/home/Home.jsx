import React from 'react'
import Presentacion from './Secciones/Presentacion';
import Beneficios from './Secciones/Beneficios';
import PlantillaDestacada from './Secciones/PlantillaDestacada';



function Home() {
  return (
    <>
        {/* Seccion de Presentacion */}
        <Presentacion />
        {/* Seccion de Beneficios */}
        <Beneficios />
        {/* Seccion de Plantillas Destacadas */}
        <PlantillaDestacada />
    </>
  )
}

export default Home