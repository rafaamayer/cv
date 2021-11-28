import {descricoes , Descricao} from "./Descricao.js";

export default function Experiencia(){
    return (
        <section>
            <h1 className="text-center text-2xl font-black m-3">Experiencia Profissional</h1>
            {descricoes.map(descricao => (
            <div className="bg-secondary p-8 rounded-3xl mt-3 text-primary">
                <Descricao descricao={descricao}/>
            </div> 
            ))}
        </section>
    )
}