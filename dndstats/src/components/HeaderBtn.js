import React from 'react';
import "./HeaderBtn.css";
import { Link } from "react-router-dom";

function HeaderBtn(props) {
  let titleText = "";
  let descText = "";
  let btnColour = "";
  let destination = "/";

  switch (props.where) {
    case "Compare":
      titleText = "Compare Classes";
      descText = "Select two classes and compare their stats!";
      btnColour = "#51A1C5";
      destination = "/compare";
      break;

    case "Classes":
      titleText = "View Our API";
      descText = "Go see the API documentation yourself!";
      btnColour = "#AB6DAC";
      destination = "https://5e-bits.github.io/docs/api"; // External URL
      break;

    case "ViewTimeline":
      titleText = "View Timeline";
      descText = "View the growth of a class as it levels up!";
      btnColour = "#507F62";
      destination = "/timeline";
      break;

    default:
      break;
  }

  return (
    <Link to={destination} className="header-btn-wrapper" target="_blank" rel="noopener noreferrer">
      {/* Added target="_blank" and rel="noopener noreferrer" to open the link in a new tab/window */}
      <div className="btn-con" style={{ backgroundColor: btnColour }}>
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
