import { listaHabilidades, ListaHabilitidades } from "./Habilidades.js"

export default function FormacaoEHabilidade(){
    return (
        <section className="md:flex-1">
            <h1 className="text-center text-3xl font-black m-3">Formação e Habilidades</h1>
            <div className="text-center">
                <h2 className="font-extrabold text-xl">Universidade Federal de Santa Catarina</h2>
                <h3 className="my-1 font-bold text-lg ">Economia (2019 -2023)</h3>
            </div>
            <div className="bg-secondary p-8 rounded-3xl text-primary md:flex lg:mx-44 xl:mx-64 2xl:mx-96">
                {listaHabilidades.map(habilidade => (
                    <ListaHabilitidades habilidade={habilidade}/>
                ))}
            </div>         
        </section>
    )
}