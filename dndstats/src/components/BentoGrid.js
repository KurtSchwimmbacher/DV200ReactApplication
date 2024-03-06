// src/components/BentoGrid.js
import React from "react";
import "./BentoGrid.css";

// import chart.js and charts
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import Piechart from "./graphs/Piechart";
import BarGraph from "./graphs/BarGraph";

// import data
import PieData from "../data/PieData.json";
import BarData from "../data/BarData.json";

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




  return (
    <div className="wrapper">
        <div className="grid1">

        </div>
        <div className="grid2">
            <BarGraph chartData={bargraphData} />
        </div>
        <div className="grid3">
            <Piechart chartData={piechartData} />
        </div>
        <div className="grid4">4</div>
        <div className="grid5">5</div>
        <div className="grid6">6</div>
        <div className="grid7">7</div>
        <div className="grid8">8</div>
    </div>
  );
}
export default BentoGrid;