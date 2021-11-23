import SobreMim from "./SobreMim";

export default function App(props) {
  return (
    <section>
      <div className="text-quaternary">
      <h1>{props.name}</h1>
      <h2>{props.objective}</h2>
    </div>
    <SobreMim email="rafa.m.mayer@hotmail.com" />
    </section>
    
  )
}