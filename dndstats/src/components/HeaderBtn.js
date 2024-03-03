import "./HeaderBtn.css";

function HeaderBtn(props){
    let titleText = "";
    let descText = "";
    let btnColour = "";

    switch (props.where){
        case("Compare"):
            titleText = "Compare Classes";
            descText = "Description";
            btnColour = "#51A1C5";
        
        break;
    
        case("ViewSingle"):
            titleText = "View Single Items";
            descText = "Description";
            btnColour = "#AB6DAC";

        break;

        case("ViewTimeline"):
        titleText="View Timeline";
        descText = "Description";
        btnColour = "#507F62";

        break;

        default:
        break;
    }




    return(
        <div className="btn-con" style={{backgroundColor: btnColour}}>
            <div className="btn-title">
                <h3>{titleText}</h3>
            </div>
            <div className="btn-desc">
                <p>{descText}</p>
            </div>
        </div>
    );

}

export default HeaderBtn;