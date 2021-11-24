import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'

import foto from "./foto.jpg"
import Localidade from "./Localidade.js";
import SobreMim from "./SobreMim.js"
import Contato from "./Contato";

export default function Perfil(props){
    return (
        <div className="bg-secondary p-8 rounded-3xl">
            <div className="bg-tertiary p-3 rounded-3xl text-primary">
                <img src={foto} alt="Foto" className="rounded-full w-36 mx-auto my-2"/>
                <Localidade localidade="Florianópolis"/>
                <SobreMim />
                <Contato email="rafa.m.mayer@hotmail.com"/>
                <div className="flex justify-evenly">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <FontAwesomeIcon icon={faCode} />
                </div>
            </div>
        </div>       
    )
}
