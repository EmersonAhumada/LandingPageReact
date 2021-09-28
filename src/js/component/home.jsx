import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron1 } from "./Jumbotron";
import { Card1 } from "./card";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron1></Jumbotron1>
			<br></br>
			<div className="row justify-content-center mx-4">
				<Card1
					imagen="https://plazamercado.shop/wp-content/uploads/2020/10/Pi%C3%B1a-Golden.jpg"
					title="Piña"
					text="Hola soy una Piña"
				/>
				<br></br>
				<Card1
					imagen="https://resizer.glanacion.com/resizer/3WDnqCk7XfarxJ3XXHy7vfCKeaE=/1119x746/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/BJB5RPAYRNEOTK6D7JAHQ6ZCCA.jpg"
					title="Banana"
					text="Hola soy una Banana"
				/>
				<br></br>
				<Card1
					imagen="https://www.tododisca.com/wp-content/uploads/2020/11/Manzana-roja-y-verdes-1024x576.jpg"
					title="Manzanas"
					text="Hola, somos un par de Manzanas"
				/>
				<br></br>
				<Card1
					imagen="https://www.clikisalud.net/wp-content/uploads/2020/03/maneras-consumo-mango-protege-salud.jpg"
					title="Mango"
					text="Adivina...soy un Mango!"
				/>
			</div>
		</div>
	);
};

export default Home;
