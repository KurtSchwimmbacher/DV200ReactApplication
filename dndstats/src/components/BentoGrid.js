// src/components/BentoGrid.js
import React from "react";
import { useState, useEffect } from "react";
// styling
import "./BentoGrid.css";

// import axios
import Axios from 'axios';


// import chart.js 
// defaults can be used to change global settings for all graphs  
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";

// import all the chart components
import Piechart from "./graphs/Piechart";
import BarGraph from "./graphs/BarGraph";
import RadarChart from "./graphs/RadarChart";
import LineGraph from "./graphs/LineGraph";



// important bootstrap components where needed
import Carousel from "../components/Carousel";



ChartJS.register(CategoryScale);
// global chart settings, they fit in the containers better with these defaults set this way.
defaults.maintainAspectRatio = false;
defaults.responsive = true;

function BentoGrid() {

  

// 
  return (
    // this forms the base for a css grid that will be manipulated into a Bento Grid
    <div className="wrapper">
      {/* this div contains a linegraph component */}
      <div className="grid1 grid-con">
        
      </div>
      <div className="grid2 grid-con">
       
      </div>
      <div className="grid3 grid-con">
      </div>
      <div className="grid4 grid-con">
      </div>
      <div className="grid5 grid-con">
      </div>
      <div className="grid6 grid-con">
        <Carousel content= "Classes1" />
      </div>

      <div className="grid7 grid-con">
        <Carousel content= "Classes2" />
      </div>
    </div>
  );
}

export default BentoGrid;