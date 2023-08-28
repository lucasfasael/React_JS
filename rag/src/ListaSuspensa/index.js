import "./ListaSuspensa.css"

export const ListaSuspensa = () => {
    return (
        <div className="lista-suspensa">
            <label>Classe</label>
            <div className="div">
                <select>
                    <option>Espadachim</option>
                    <option>Arqueiro</option>
                    <option>Mago</option>
                    <option>Sacerdote</option>
                </select>
            </div>
        </div>
    )
}