import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import NavesDetalle from "../component/navesdetalle"



const Naves = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.obtenerNaves()
    }, [])
    console.log(store.naves)

    return (
        <div>
            <h1 className="text-danger" style={{ marginTop: "10px" }} > Naves </h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll" style={{ marginBottom: "10px" }}>
                    {store.naves.map((item, index) => (
                        <NavesDetalle key={index} item={item} id={(index + 1)} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Naves