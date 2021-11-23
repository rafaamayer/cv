import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'

export default function SobreMim(props){
    return (
        <div>
            <h1>Localidade</h1>
            <h1>Sobre Mim</h1>
            <h1>E-Mail: {props.email}</h1>
            <FontAwesomeIcon icon={faBriefcase} />
            <FontAwesomeIcon icon={faCode} />
        </div>
    )
}
