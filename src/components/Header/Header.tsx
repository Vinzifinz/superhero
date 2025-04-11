import { Link } from "react-router-dom";
import "./Header.css"

function Header() {

    return (
        <header>
            <img className="logo" src="src/assets/Super.svg" alt="logo" />
            <nav>
                <ul>
                    <li><Link to="/" >Accueil</Link></li>
                    <li><Link to="/registerpage">Mon compte</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;