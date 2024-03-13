// src/components/Navbar.js
import "./Navbar.css";
import logo from "./logo.png"

// import link
import { Link } from "react-router-dom";

function Navbar(props){

    let navHeight = "";

    switch (props.where){
        case("Dash"):
            navHeight = "210vh"
        break;
    
        case("Compare"):
            navHeight = "110vh"
        break;

        case("Timeline"):
            navHeight = "110vh"
        break;

        default:
        break;
    }

    return(
        <nav className="navbar" style={{height: navHeight}}>
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
                        <i class='bx bx-home-alt'></i>
                        Dashboard
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/compare">
                        <i class='bx bx-bar-chart' ></i>                    
                        Compare
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/timeline">
                        <i class='bx bx-line-chart' ></i>
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