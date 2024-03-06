// src/components/Navbar.js
import "./Navbar.css";
import logo from "./logo.png"

// import link
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item nav-logo">
                    <Link className="logo-link" to="/">
                        <h2>Adventurer's</h2>
                        <img className="img-logo" src={ logo } alt="dice logo"></img>
                        <h2>Almanac</h2>
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
            <div className="bg3-mode">
                <div className="line-brder"></div>
                Toggle Baldurs Gate Mode
            </div>
        </nav>
    );
}

export default Navbar;