import "./Equipo.css"
import Colaborador from "../Colaborador";

const Equipo = (props) => {
    //Destructuración
    const { titulo, colorPrimario, colorSecundario } = props.datos;
    const { colaboradores, eliminarColaborador } = props;

    const backgroundColor = { backgroundColor: colorSecundario }
    const estiloTitulo = { borderColor: colorPrimario }

    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={backgroundColor}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    /> )
                }
            </div>
            </section>
    }</>
}

export default Equipo