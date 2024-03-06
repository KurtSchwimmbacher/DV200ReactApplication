// src/components/BentoGrid.js
import React from "react";
import "./BentoGrid.css";

// import chart.js and charts
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import Piechart from "./graphs/Piechart";
import BarGraph from "./graphs/BarGraph";
import RadarChart from "./graphs/RadarChart";

// import data
import PieData from "../data/PieData.json";
import BarData from "../data/BarData.json";
import RadarData from "../data/RadarData.json";

// important other components
import Carousel from "../components/Carousel";

Chart.register(CategoryScale);

function BentoGrid() {

    let piechartData = {
        labels: PieData.map((data)=>data.label),
        datasets: [{
            label: "Count",
            data: PieData.map((data)=>data.traffic),
            backgroundColor: ["#51A1C5","#A184BC","#507F62","#C73032"],
        }]
    };
    let bargraphData = {
        labels: BarData.map((data)=>data.label),
        datasets:[{
          label: "Monthly Sales",
          data: BarData.map((data)=>data.Sales),
          backgroundColor: ["#51A1C5","#A184BC","#507F62","#C73032"],
          borderRadius:2
        }]
      }

      let radarGraphData = {
        labels: RadarData.map((data)=>data.label),
        datasets: [{
            label: "Character Stats",
            data: RadarData.map((data)=>data.Score),
            backgroundColor: 'rgba(81, 161, 197, 0.4)',
            borderColor: "#51A1C5",
            tension: 0.1
        }]
        
      }


  return (
    <div className="wrapper">
        <div className="grid1 grid-con">

        </div>
        <div className="grid2 grid-con">
            <BarGraph chartData={bargraphData} />
        </div>
        <div className="grid3 grid-con">
            <Piechart chartData={piechartData} />
        </div>
        <div className="grid4 grid-con">4</div>
        <div className="grid5 grid-con">
            <RadarChart chartData={radarGraphData} />
        </div>
        <div className="grid6 grid-con">
            
        </div>
        <div className="grid7 grid-con">
            <Carousel content= "BG3"/>
        </div>
        <div className="grid8 grid-con">
        </div>
    </div>
  );
}
export default BentoGrid;