export default function Contato(props){
    return (
        <div className="text-center mb-2">
            <strong>E-Mail:</strong>  
            <p>{props.email}</p> 
        </div>
    )
}