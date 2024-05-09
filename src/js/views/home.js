import React from "react";
import Card from "../component/Card";
import "../../styles/home.css";
import Naves from "./Naves";
import Personajes from "./personajes";
import Planetas from "./Planets";


export const Home = () => {
	return (
		<>
			<div className="container">
				<Personajes />
				<Planetas />
				<Naves />
			</div>
		</>
	)

} 