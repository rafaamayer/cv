import Perfil from "./Perfil/Perfil.js"
import FormacaoEHabilidade from "./FormacaoHabilidades/FormacaoHabilidades.js"
import Experiencia from "./Experiencia/Experiencia.js"

export default function App(props) {
  return (
    <section className="text-secondary">
      <div className="text-center">
        <h1 className="text-4xl font-black">{props.name}</h1>
        <h2 className="my-3 text-xl">{props.objective}</h2>
      </div>
      <Perfil email="rafa.m.mayer@hotmail.com" />
      <FormacaoEHabilidade />
      <Experiencia />
    </section>
  )
}