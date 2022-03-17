import './NavBar.css'
import {Link} from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-mainbg">
                <Link className="navbar-brand navbar-logo" to="/notfound">
                    NotFound
                </Link>
            </nav>
            
        </div>
    )
}

export default NavBar
