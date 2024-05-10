import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({ item, id }) => {
    const navigate = useNavigate()
    console.log(id)
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + item.url.split("/")[5] + ".jpg"} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"> Genero: {item.gender}</p>

                <button onClick={() => navigate(`/details/people/${item.url.split("/")[5]}`)} className="btn btn-primary">Go somewhere</button>
                <button className='btn btn-outline-dark float-end' >
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>

    )
}

export default Card