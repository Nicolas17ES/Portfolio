import './NotFound.css'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <section>
            <div className="error-container">
                <p className="error" title="404">404 ERROR</p>
                <p className="text-error">I've searched high and low but couldn't find what you're looking for. Let me take you back home...</p>
                <Link to="/home">
                    <button className="button-home">Go back</button>
                </Link>          
            </div>
        </section>
    )
}

export default NotFound