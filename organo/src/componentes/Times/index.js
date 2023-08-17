import { Colaborador } from "../Colaborador";
import "./Times.css";

export const Times = (props) => {
    return (
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <Colaborador />
        </section>
    )
}