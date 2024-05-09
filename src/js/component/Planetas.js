import React from 'react'

const CardPlanets = ({ item, id }) => {

    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            {id == 1 ?
                <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={item.name} />
                :
                <img src={"https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"} className="card-img-top" alt={item.name} />
            }


            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"> Habitantes: {item.population}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button className='btn btn-outline-dark float-end' >
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>

    )
}

export default CardPlanets