import { listaHabilidades, ListaHabilitidades } from "./Habilidades.js"

export default function FormacaoEHabilidade(){
    return (
        <section>
            <h1 className="text-center text-2xl font-black m-3">Formação e Habilidades</h1>
            <div className="bg-secondary p-8 rounded-3xl text-primary">
                <h2 className="font-extrabold text-center text-xl">Universidade Federal de Santa Catarina</h2>
                <h3 className="my-1 font-bold text-center text-lg">Economia (2019 -2023)</h3>
                {listaHabilidades.map(habilidade => (
                    <ListaHabilitidades habilidade={habilidade}/>
                ))}
            </div>         
        </section>
    )
}