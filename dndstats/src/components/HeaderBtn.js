import "./HeaderBtn.css";

// import link
import { Link } from "react-router-dom";

function HeaderBtn(props){
    let titleText = "";
    let descText = "";
    let btnColour = "";
    let destination = "/"

    switch (props.where){
        case("Compare"):
            titleText = "Compare Classes";
            descText = "Select two classes and compare their stats!";
            btnColour = "#51A1C5";
            destination = "/compare";
        
        break;
    
        case("Classes"):
            titleText = "View Classes";
            descText = "View the twelve class options you can view the stats of!";
            btnColour = "#AB6DAC";

        break;

        case("ViewTimeline"):
        titleText="View Timeline";
        descText = "View the growth of a class as it levels up!";
        btnColour = "#507F62";
        destination = "/timeline";

        break;

        default:
        break;
    }




    return(
        <Link to={destination} className="header-btn-wrapper">
            <div className="btn-con" style={{backgroundColor: btnColour}}>
                <div className="btn-title">
                    <h3>{titleText}</h3>
                </div>
                <div className="btn-desc">
                    <p>{descText}</p>
                </div>
            </div>
        </Link>
    );

}

export default HeaderBtn;