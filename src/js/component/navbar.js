import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className=" navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://i.pinimg.com/564x/59/df/d8/59dfd84c3c179b71e38da0280513504b.jpg" style={{ width: 80, height: 50 }}></img></span>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<a class="btn btn-black text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>

						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
