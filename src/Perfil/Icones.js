import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'

export default function Icones() {
    return (
        <div className="flex justify-evenly">
            <a href="https://www.linkedin.com/in/rafael-mayer/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faBriefcase} />
            </a>
            <a href="https://github.com/rafaamayer" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCode} />
            </a>
        </div>
    )
}

