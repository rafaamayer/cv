import { listaHabilidades, ListaHabilitidades } from "./Habilidades.js"

export default function FormacaoEHabilidade(){
    return (
        <div className="bg-secondary p-8 rounded-3xl mt-3 text-primary">
            <h1>Formação e Habilidades</h1>
            <h2>Universidade Federal de Santa Catarina</h2>
            <br/>
            <h3>Economia (2019 -2023)</h3>
            {listaHabilidades.map(habilidade => (
                <ListaHabilitidades habilidade={habilidade}/>
            ))}
            
        </div>

    )
}