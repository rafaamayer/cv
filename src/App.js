import SobreMim from "./SobreMim";
import FormacaoEHabilidade from "./FormacaoEHabilidades";


export default function App(props) {
  return (
    <section className="text-quaternary">
      <div className="text-center font-bold">
        <h1 className="text-4xl">{props.name}</h1>
        <h2 className="mt-2 text-1xl">{props.objective}</h2>
      </div>
      <SobreMim email="rafa.m.mayer@hotmail.com" />
      <FormacaoEHabilidade />
    </section>
    
  )
}