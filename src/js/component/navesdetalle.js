import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Context } from "../store/appContext";

const NavesDetalle = ({ item, id }) => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>

            <img src={"https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg"} className="card-img-top" alt={item.name} onError={(e) => {
                e.target.onError == null, e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
            }} />

            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"> consumables: {item.consumables}</p>
                <button onClick={() => navigate(`/details/starships/${item.url.split("/")[5]}`)} className="btn btn-primary">Go somewhere</button>
                <button className='btn btn-outline-dark float-end'
                    onClick={(e) => { actions.addToFavorites(item.name) }}
                >
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>

    )
}

export default NavesDetalle