import React from "react";
import Acordeon from "./componentePreguntasFrecuentes/Acordeon";
import "./PreguntaFrecuente.css";

function PreguntasFrecuentes() {
    const acordeonData = [
        {
            tituloAcordeones: "Tiempos y Costos",
            PregRta: [
                {
                    tituloPregunta:
                        "¿Cuánto tiempo tomará desarrollar mi página web?",
                    descripcionRespuesta: (
                        <>
                            El tiempo estimado para desarrollar tu página web
                            dependerá en gran medida de la complejidad del
                            proyecto y la aprobación de la maqueta. Después de
                            que la maqueta sea aprobada, generalmente lleva
                            entre 15 y 30 días hábiles para completar el
                            desarrollo y lanzar tu sitio web. Este período
                            incluye la implementación de funcionalidades,
                            diseño, contenido y pruebas exhaustivas para
                            garantizar que tu sitio funcione de manera óptima
                            antes de su lanzamiento.
                            <br></br>
                            <br></br>
                            Es importante mencionar que la duración exacta puede
                            variar según factores específicos de tu proyecto,
                            como la cantidad de páginas, la integración de
                            características especiales y la disponibilidad de
                            contenido. Estamos comprometidos a trabajar con
                            eficiencia para ofrecerte un sitio web de alta
                            calidad en el menor tiempo posible, sin comprometer
                            la excelencia en el diseño y la funcionalidad.
                            <br></br>
                            <br></br>
                            Si tienes un plazo específico en mente o necesitas
                            una estimación más precisa basada en tus requisitos
                            particulares, no dudes en ponerte en contacto con
                            nosotros. Estamos aquí para garantizar que tu
                            presencia en línea siga siendo exitosa y sin
                            problemas incluso después del lanzamiento inicial.
                        </>
                    ),
                },
                {
                    tituloPregunta:
                        "¿Cuál es el costo de desarrollar una página web?",
                    descripcionRespuesta: (
                        <>
                            Landing Page: Nuestro paquete de Landing Page tiene
                            un costo de $70,000. Este paquete es ideal para
                            promocionar un producto, servicio o evento de manera
                            efectiva con una página sencilla pero atractiva.
                            <br></br>
                            <br></br>
                            Enterprise: Si estás buscando una solución web más
                            completa para tu empresa, nuestro paquete Enterprise
                            está disponible por $90,000.
                            <br></br>
                            <br></br>
                            Este paquete suele incluir características como
                            múltiples páginas, formularios de contacto avanzados
                            y personalización específica.
                            <br></br>
                            <br></br>
                            Ecommerce: Para aquellos interesados en establecer
                            una tienda en línea, ofrecemos el paquete Ecommerce
                            por $110,000. Con este paquete, podrás crear una
                            plataforma de compras en línea con funciones como
                            carrito de compras, opciones de pago y gestión de
                            inventario."
                        </>
                    ),
                },
                {
                    tituloPregunta:
                        "¿Qué incluye el mantenimiento y soporte posterior al lanzamiento?",
                    descripcionRespuesta: (
                        <>
                            Nuestro servicio de mantenimiento y soporte
                            posterior al lanzamiento está diseñado para
                            garantizar que tu sitio web siga funcionando de
                            manera óptima y esté actualizado después de su
                            lanzamiento. Al elegir cualquiera de nuestros
                            paquetes de desarrollo web, también tendrás acceso a
                            opciones de mantenimiento y soporte. Algunos de los
                            beneficios incluidos son:
                            <br></br>
                            <br></br>
                            Actualizaciones Técnicas: Mantendremos tu sitio web
                            actualizado con las últimas versiones de software y
                            tecnologías para garantizar su rendimiento y
                            seguridad continuos.
                            <br></br>
                            <br></br>
                            Correcciones de Errores: Si se detectan errores o
                            problemas en tu sitio web después del lanzamiento,
                            nuestro equipo técnico los abordará y solucionará de
                            manera eficiente.
                            <br></br>
                            <br></br>
                            Soporte Técnico: Te proporcionaremos un canal de
                            soporte donde podrás plantear tus consultas y
                            recibir asistencia técnica en caso de cualquier
                            problema o pregunta relacionada con el
                            funcionamiento de tu sitio.
                            <br></br>
                            <br></br>
                            Respaldo de Datos: Implementaremos sistemas de
                            respaldo periódicos para proteger tus datos en caso
                            de fallos inesperados. Esto garantiza la integridad
                            de tu sitio y la información almacenada en él.
                            <br></br>
                            <br></br>
                            Optimización Continua: Realizaremos ajustes y
                            optimizaciones para mejorar el rendimiento y la
                            velocidad de carga de tu sitio web, asegurando una
                            experiencia positiva para los usuarios.
                            <br></br>
                            <br></br>
                            Seguridad: Implementaremos medidas de seguridad para
                            proteger tu sitio web contra posibles amenazas
                            cibernéticas y ataques maliciosos.
                            <br></br>
                            <br></br>
                            Asesoramiento: Te proporcionaremos orientación sobre
                            cómo mantener y actualizar el contenido de tu sitio
                            web para maximizar su efectividad a lo largo del
                            tiempo.
                            <br></br>
                            <br></br>
                            No dudes en contactarnos para obtener información
                            más detallada sobre los términos y condiciones
                            específicos de nuestro servicio de mantenimiento y
                            soporte. Para proporcionarte una cotización precisa,
                            sería útil conocer más sobre tus necesidades
                            particulares y la naturaleza de tu sitio web.
                            Estamos aquí para asegurarnos de que tu presencia en
                            línea siga siendo exitosa y sin problemas incluso
                            después del lanzamiento inicial.",
                        </>
                    ),
                },
            ],
        },
        {
            tituloAcordeones: "Modo de Trabajo",
            PregRta: [
                {
                    tituloPregunta:
                        "¿Cuál es el proceso de desarrollo de mi sitio web?",
                    descripcionRespuesta: (
                        <>
                            Nuestro proceso de desarrollo de sitios web consta
                            de varias etapas. Primero, llevamos a cabo una
                            reunión inicial para comprender tus objetivos y
                            requerimientos. Luego, procedemos con el diseño y
                            desarrollo de la maqueta, que se te presenta para su
                            aprobación.
                            <br></br>
                            <br></br>
                            Una vez aprobada la maqueta, iniciamos la fase de
                            desarrollo y construcción del sitio web. Después de
                            finalizar el desarrollo, realizamos pruebas
                            exhaustivas para garantizar que todo funcione
                            correctamente. Finalmente, lanzamos el sitio web en
                            vivo.
                            <br></br>
                            Estamos comprometidos a mantener una comunicación
                            constante durante todo el proceso para garantizar
                            que el resultado final cumpla con tus expectativas.
                        </>
                    ),
                },
                {
                    tituloPregunta:
                        "¿Cómo puedo proporcionar contenido para mi sitio web?",
                    descripcionRespuesta: (
                        <>
                            Para asegurarnos de que el contenido se integre de
                            manera eficiente en tu sitio web, te
                            proporcionaremos pautas claras sobre cómo
                            compartirnos textos, imágenes y cualquier otro
                            contenido necesario. Puede ser útil si preparas los
                            textos en archivos de texto o documentos y compartes
                            las imágenes en formatos de alta resolución. Si
                            necesitas ayuda con la creación de contenido,
                            también ofrecemos servicios de redacción y diseño
                            gráfico que pueden facilitar el proceso.
                        </>
                    ),
                },
            ],
        },
    ];

    return (
        <div>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Preguntas frecuentes</h1>
                        <p className="lead fw-normal text-muted mb-0">
                            ¿En qué podemos ayudarte?
                        </p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            {/* Acordeones */}
                            {acordeonData.map((acordeon, index) => (
                                <Acordeon
                                    key={index}
                                    tituloAcordeones={acordeon.tituloAcordeones}
                                    PregRta={acordeon.PregRta}
                                />
                            ))}
                        </div>

                        {/* Dudas y GMail */}
                        <div className="col-xl-4">
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">
                                                ¿Tienes más dudas?
                                            </div>
                                            <p className="text-muted mb-4">
                                                Contactanos
                                                <br />
                                                <a href="#!">
                                                nnserviciosweb@gmail.com
                                                </a>
                                            </p>
                                            <div className="h6 fw-bolder">
                                                Síguenos!
                                            </div>
                                            <a
                                                className="fs-5 px-2 link-dark"
                                                href="https://www.facebook.com/people/NNS/61550064306296/"
                                            >
                                                <i className="bi-facebook"></i>
                                            </a>
                                            <a
                                                className="fs-5 px-2 link-dark"
                                                href="https://www.instagram.com/nns.digital/"
                                            >
                                                <i className="bi-instagram"></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PreguntasFrecuentes;
