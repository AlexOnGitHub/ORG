import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

    const getValor = (e) => {
        props.actualizarEquipo(e.target.value);
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={getValor}
        ></input>
    </div>
}

export default CampoTexto