export default function Contato(props){
    return (
        <h1 className="text-center mb-3">
            E-Mail: 
            <br />
            {props.email}
        </h1>
    )
}