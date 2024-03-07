// src/components/BentoGrid.js
import React from "react";
import "./BentoGrid.css";

// import chart.js and charts
import { Chart as ChartJS, defaults } from "chart.js/auto";
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

ChartJS.register(CategoryScale);
defaults.maintainAspectRatio = false;
defaults.responsive = true;

function BentoGrid() {

    let piechartData = {
        labels: PieData.map((data)=>data.label),
        datasets: [{
            label: "Count",
            data: PieData.map((data)=>data.traffic),
            backgroundColor: ["#51A1C5","#A184BC","#507F62","#C73032"],
        }]
    };

    let pieChartOpt = {
        plugins: {
          title: {
            display: true,
            text: "Ratio of website traffic"
          }
        }, 
        maintainAspectRatio : false,
        aspectRatio : 0.3,
      };

      let miniPieChartOpt = { 
        responsive : true,
        maintainAspectRatio : false,
        aspectRatio : 0.2,
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
            <Piechart 
            chartData={piechartData}
            chartOpt = {pieChartOpt} 
            />
        </div>
        <div className="grid4 grid-con">
            <div className="pie-col"><Piechart chartData={piechartData} chartOpt={miniPieChartOpt} /></div>
            <div className="pie-col"><Piechart chartData={piechartData} chartOpt={miniPieChartOpt} /></div>
            <div className="pie-col"><Piechart chartData={piechartData} chartOpt={miniPieChartOpt} /></div>
        </div>
        <div className="grid5 grid-con">
            <RadarChart chartData={radarGraphData} />
        </div>
        <div className="grid6 grid-con">
            <Carousel content= "Classes1" />
        </div>
        <div className="grid7 grid-con">
            <Carousel content= "BG3"/>
        </div>
        <div className="grid8 grid-con">
            <Carousel content= "Classes2" />
        </div>
    </div>
  );
}
export default BentoGrid;