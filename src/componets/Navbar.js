
import { Link } from "react-router-dom";
import '../style/nav.css'

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Sati<span>sh Chaurasiya</span></h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
