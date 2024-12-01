
import { Link } from "react-router-dom";
import '../style/nav.css'

function Navbar({ activeRoute, setActiveRoute }) {
    
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Sati<span>sh Chaurasiya</span></h1>
            <ul className="navbar-links">
                <li><Link to="/satiss_hh" className="selected">Home</Link></li>
                <li><Link to="/satiss_hh/about">About</Link></li>
                <li><Link to="/satiss_hh/project">Projects</Link></li>
                <li><Link to="/satiss_hh/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
