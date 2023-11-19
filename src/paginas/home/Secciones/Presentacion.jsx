import React from "react";
import "../Home.css";
import imagen1 from "../../../imagenes/composicion-aislada-tablet-laptop-smartphone/mockup-colorme-makeup.png";
import imagen2 from "../../../imagenes/composicion-aislada-tablet-laptop-smartphone/mockup-equipo-libreando.png";
import imagen3 from "../../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Gorgory.png";
import imagen4 from "../../../imagenes/composicion-aislada-tablet-laptop-smartphone/Restaurante-Chino.png";
import Boton from "../../../componentes/Boton";
import { useNavigate } from "react-router-dom";

function Presentacion() {
    const navigate = useNavigate();
	const botonLeerMas = () => {
		const sectionBeneficios = document.getElementById("sectionBeneficios");
		if (sectionBeneficios) {
			sectionBeneficios.scrollIntoView({ behavior: "auto" });
		}
	};

	const obtenerAqui = () => {
		navigate("/plantilla");
	};
	return (
		<header className="bg-morado py-5 presentacion">
			<div className="container px-5">
				<div className="row gx-5 align-items-center justify-content-center">
					<div className="col-lg-8 col-xl-7 col-xxl-6">
						<div className="my-5 text-center text-xl-start">
							<h1 className="display-5 fw-bolder text-white mb-2">
								Tu presencia digital, tu éxito asegurado
							</h1>
							<p className="lead fw-normal text-white-50 mb-4">
								En un mercado cada vez más saturado, es crucial
								contar con una presencia digital sólida y
								efectiva. Nuestro equipo de expertos se
								especializa en crear estrategias personalizadas
								para maximizar tu visibilidad en la web y atraer
								a tu público objetivo.
							</p>
							<div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start ">
								<Boton
									nombreBoton="Obtener Aqui"
									className="btn-lg px-4"
									onClick={obtenerAqui}
								/>
								<Boton
									nombreBoton="Leer Más"
									onClick={botonLeerMas}
									className="botonLeerMas btn-lg px-4"
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-xxl-6 d-xl-block text-center">
						<div id="carouselExample" className="carousel slide">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										src={imagen1}
										className="d-block w-100"
										alt="responsive pagina colormemakeup.art"
									/>
								</div>
								<div className="carousel-item">
									<img
										src={imagen2}
										className="d-block w-100"
										alt="responsive pagina libreando.ar"
									/>
								</div>
								<div className="carousel-item">
									<img
										src={imagen3}
										className="d-block w-100"
										alt="responsive Pagina Gorgory Burger"
									/>
								</div>
								<div className="carousel-item">
									<img
										src={imagen4}
										className="d-block w-100"
										alt="responsive Pagina Restaurante Chino"
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExample"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">
									Previous
								</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExample"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Presentacion;
