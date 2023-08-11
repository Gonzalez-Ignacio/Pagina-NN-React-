import React from 'react';
import CardPrecio from './componente/CardPrecio';

function Precio() {
    const cardsData = [                                                                   //Creamos un Objeto donde Objeto representara una Card 
        {
            titulo: 'Landing Page',
            precio: '70.000',
            caracteristicas: [
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Diseño Personalizado', destacada: false },          //Damos Icono, la descripcion y destacada boleano para la clase de "text mute" en caso de ser verdadero
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Formularios de Captura', destacada: false},        //En caso de ser Falso, la clase queda vacía
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Optimización para Móviles', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Integración con Redes Sociales', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Estadísticas Básicas', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Escalabilidad', destacada: false},      

                { classNameIcono: 'bi bi-x', descripcion: 'Catálogo de Productos', destacada: true},   
                { classNameIcono: 'bi bi-x', descripcion: 'Carrito de Compras', destacada: true},   
                { classNameIcono: 'bi bi-x', descripcion: 'Procesamiento de Pagos', destacada: true},             
                { classNameIcono: 'bi bi-x', descripcion: 'Gestión de Inventarios', destacada: true},   
                { classNameIcono: 'bi bi-x', descripcion: 'Reseñas y Valoraciones', destacada: true}, 
                { classNameIcono: 'bi bi-x', descripcion: 'Integración de Analytics', destacada: true},

                { classNameIcono: 'bi bi-x', descripcion: 'Integración de Sistemas', destacada: true},      
            ],
        },
        {
            titulo: 'Enterprise',
            precio: '90.000',
            caracteristicas: [
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Diseño Personalizado', destacada: false },          
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Formularios de Captura', destacada: false},      
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Optimización para Móviles', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Integración con Redes Sociales', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Estadísticas Básicas', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Escalabilidad', destacada: false},     
                

                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Catálogo de Productos', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Carrito de Compras', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Procesamiento de Pagos', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Gestión de Inventarios', destacada: false},      
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Reseñas y Valoraciones', destacada: false}, 
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Integración de Analytics', destacada: false},

                { classNameIcono: 'bi bi-x', descripcion: 'Integración de Sistemas', destacada: true},    

            ],
        },
        {
            titulo: 'E-commerce',
            precio: '110.000',
            caracteristicas: [
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Diseño Personalizado', destacada: false },          
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Formularios de Captura', destacada: false},      
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Optimización para Móviles', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Integración con Redes Sociales', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Estadísticas Básicas', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Escalabilidad', destacada: false},         

                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Catálogo de Productos', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Carrito de Compras', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Procesamiento de Pagos', destacada: false},   
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Gestión de Inventarios', destacada: false},      
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Reseñas y Valoraciones', destacada: false}, 
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Integración de Analytics', destacada: false},
                
                { classNameIcono: 'bi bi-check text-primary', descripcion: 'Integración de Sistemas', destacada: false},      

            ],
        },
    ];

    return (
        <div>
            <section className='bg-light py-5'>
                <div className='container px-5 my-5'>
                    <div className='text-center mb-5'>
                        <h1 className='fw-bolder'>Paga a medida que creces</h1>
                        <p className='lead fw-normal text-muted mb-0'>
                            Con nuestros planes de precios sin complicaciones
                        </p>
                    </div>
                    <div className='row gx-5 justify-content-center'>
                        {cardsData.map((card, index) => (                                //Indicamos que itere en cada una de los objetos.
                            <div key={index} className='col-lg-6 col-xl-4'>              {/*Le damos la Key para que optimice la actualización y rendimiento*/}
                                <CardPrecio                                    //Entonces al tener un .map le estamos diciendo que por cada obj, cree una Card
                                    titulo={card.titulo}
                                    precio={card.precio}
                                    caracteristicas={card.caracteristicas}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Precio;
