

import foto from "./foto.jpg"
import Localidade from "./Localidade.js";
import SobreMim from "./SobreMim.js"
import Contato from "./Contato.js";
import Icones  from "./Icones.js";

export default function Perfil(props){
    return (
        <section className="bg-secondary p-8 rounded-3xl ">
            <div className="bg-tertiary p-3 rounded-3xl text-primary sm:p-0">
                <img src={foto} alt="Foto" className="rounded-full w-36 mx-auto my-2 
                                                      sm:float-left sm:top-0 sm:m-0 sm:rounded-tr-none sm:rounded-tl-lg sm:rounded-bl-none sm:rounded-br-lg sm:mr-3 h-auto"/>
                <Localidade localidade="Florianópolis"/>
                <SobreMim />
                <Contato email="rafa.m.mayer@hotmail.com"/>
                <Icones />
            </div>
        </section>       
    )
}