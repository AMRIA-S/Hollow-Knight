import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoMenu from '../Svg/LogoMenu.jsx'

function Menu() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={open ? () => setOpen(false) : () => setOpen(true)}>
                <LogoMenu />
            </button>
            <ul
                // style={open ? { display: 'block' } : { display: 'none' }}
                className={
                    open ? 'headerNav--MenuOuvert' : 'headerNav--MenuFerme'
                }
            >
                <li>
                    <Link to="/" className="headerNav-link">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/team-cherry" className="headerNav-link">
                        Team Cherry
                    </Link>
                </li>
                <li>
                    <Link className="headerNav-link" to="/hollow-knight">
                        Hollow Knight
                    </Link>
                </li>
            </ul>
        </>
    )
}
export default Menu
