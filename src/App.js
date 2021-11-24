import Perfil from "./Perfil/Perfil.js"
import FormacaoEHabilidade from "./FormacaoEHabilidades.js"

export default function App(props) {
  return (
    <section className="text-secondary">
      <div className="text-center font-bold">
        <h1 className="text-4xl">{props.name}</h1>
        <h2 className="my-3 text-xl">{props.objective}</h2>
      </div>
      <Perfil email="rafa.m.mayer@hotmail.com" />
      <FormacaoEHabilidade />
    </section>
  )
}