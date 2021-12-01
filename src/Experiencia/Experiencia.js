import {descricoes , Descricao} from "./Descricao.js";

export default function Experiencia(){
    return (
        <section>
            <h1 className="text-center text-3xl font-black m-3">Experiencia Profissional</h1>
            <div className="md:grid md:grid-cols-2 grid-flow-row md:gap-3 lg:grid-cols-3 2xl:mx-64">
                {descricoes.map(descricao => (
                <div className="bg-secondary p-8 rounded-3xl mt-3 text-primary">
                    <Descricao descricao={descricao}/>
                </div> 
                ))}
            </div>
        </section>
    )
}