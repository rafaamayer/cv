export default function Contato(props){
    return (
        <div className="text-center mb-2 sm:text-left sm:flex sm:pt-1">
            <strong>E-Mail:</strong>  
            <p className="sm:ml-1">{props.email}</p> 
        </div>
    )
}