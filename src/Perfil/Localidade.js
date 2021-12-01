export default function Localidade(props){
    return (
        <div className="text-center m-3 sm:text-left sm:flex sm:m-0 sm:pt-2 lg:block lg:text-center">
            <strong>Localidade: </strong>     
            <p className="sm:ml-1"> {props.localidade} </p>     
        </div> 
    )
}