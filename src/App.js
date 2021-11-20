import SobreMim from "./SobreMim";

export default function App(props) {
  return (
    <div className="text-quaternary">
      <h1>{props.name}</h1>
      <h2>{props.objective}</h2>
      <SobreMim email="rafa.m.mayer@hotmail.com" />
    </div>
  )
}