import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa"
import "./Formulario.css"

export const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const aoSalvar = (evento) => {
        console.log(evento);
        evento.preventDefault()
        console.log("Formulário salvo com sucesso !")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador: </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Anexe sua imagem" />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}