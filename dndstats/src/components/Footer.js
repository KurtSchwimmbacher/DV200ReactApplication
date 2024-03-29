// src/components/Navbar.js
import "../App.css";


function Footer(props){

    let footerMargin = "";

    switch (props.where){
        case("Dash"):
            footerMargin = "139vh";
        break;
    
        case("Compare"):
            footerMargin = "280vh";
        break;

        case("Timeline"):
            footerMargin = "55.5vh";
        break;

        default:
        break;
    }

    return(
        <footer  style={{marginTop: footerMargin}}>
            <h1>Adventurer's Almanac</h1>
        </footer>
    );
}

export default Footer;