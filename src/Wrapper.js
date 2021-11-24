import Perfil from "./Perfil/Perfil.js"
import FormacaoEHabilidade from "./FormacaoEHabilidades.js"

export default function Wrapper(){
    return (
        <div>
            <Perfil email="rafa.m.mayer@hotmail.com" />
            <FormacaoEHabilidade />
        </div>
    )
}