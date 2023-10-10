import Menu from '../Menu/Menu'
import './header.scss'

function Header() {
    return (
        <header>
            <nav className="headerNav">
                <Menu />
            </nav>
        </header>
    )
}

export default Header
