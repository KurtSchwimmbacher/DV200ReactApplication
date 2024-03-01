import "./Navbar.css";
import logo from "./logo.png"
// import link
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link className="logo-link" to="/">
                        <h1>Adventurer's</h1>
                        <img className="img-logo" src={ logo } alt="dice logo"></img>
                        <h1>Almanac</h1>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/">
                        {/* icon */}
                        Dashboard
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/compare">
                        {/* icon */}
                        Compare
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/timeline">
                        {/* icon */}
                        Timeline
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;