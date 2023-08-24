import { Button } from "../Button"
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa"
import "./Formulario.css"

export const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Dados do novo membro do Clã: </h2>
                <CampoTexto label="Nome" place="Digite o seu nome"></CampoTexto>
                <CampoTexto label="Nick" place="Digite o seu nickname"></CampoTexto>
                <CampoTexto label="Imagem" place="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa></ListaSuspensa>
                <Button>
                    Cadastrar
                </Button>
            </form>
        </section>
    )
}