import React from 'react'

const Card = ({ item, id }) => {
    console.log(id)
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"> Genero: {item.gender}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button className='btn btn-outline-dark float-end' >
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>

    )
}

export default Card