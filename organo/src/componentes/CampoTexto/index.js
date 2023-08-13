import "./CampoTexto.css"

export const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificado}></input>
        </div>
    )
}