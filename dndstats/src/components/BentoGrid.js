// src/components/BentoGrid.js
import React from "react";
// styling
import "./BentoGrid.css";

// important bootstrap components where needed
import Carousel from "../components/Carousel";

import doughnutImg from "../assets/Dash-Imgs/DoughnutChart.png";
import spellBook from "../assets/Dash-Imgs/SpellBook.jpg";

function BentoGrid() {
 
  return (
    // this forms the base for a css grid that will be manipulated into a Bento Grid
    <div className="wrapper">
      {/* this div contains a linegraph component */}
      <div className="grid1 grid-con">
        <p className="bento-title">We have 12 classes that make up this data set</p>
        {/* Insert carousel with classes */}
        <Carousel />
      </div>
      <div className="grid2 grid-con">
       <p className="bento-title">Those 12 classes have data that shows stats as they progress over levels. An example would be the Bonuses at certain levels. This data is what makes up the Timeline page.</p>
       {/* insert graphic for timeline data */}
      </div>
      <div className="grid3 grid-con">
        <p className="bento-title">Some stats only show for level 1, such as Proficiency Choices. These makes up the graphics on the Compare Page.</p>
        <img src={doughnutImg} className="doughnut-img"></img>
      </div>
      <div className="grid4 grid-con">
        
      </div>
      <div className="grid5 grid-con">
        <p className="bento-title">We supplemented this data set with a spell list from a second API</p>
        <img src={spellBook} className="spellbook-img"></img>
      </div>
    </div>
  );
}

export default BentoGrid;