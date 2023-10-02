import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
    return (
        <header>
            <nav className="headerNav">
                <ul>
                    <li>
                        <Link to="/" className="headerNav-link">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link className="headerNav-link" to="/hollow-knight">
                            Hollow Knight
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
