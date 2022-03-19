import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <section>
            <div className="error-container">
                <p className="error" title="404">404 ERROR</p>
            </div>
        </section>
    )
}

export default NotFound