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


// import data ==> to be removed
import PieData from "../data/PieData.json";
import BarData from "../data/BarData.json";
import RadarData from "../data/RadarData.json";

// important bootstrap components where needed
import Carousel from "../components/Carousel";



ChartJS.register(CategoryScale);
// global chart settings, they fit in the containers better with these defaults set this way.
defaults.maintainAspectRatio = false;
defaults.responsive = true;


// this is a function to fetch the data from the API => update to handle all graph api calls on dash
const fetchData = async (classParam) => {
  try {
    // uses axios to make API call 
    const response = await Axios.get(`https://www.dnd5eapi.co/api/classes/${classParam}/levels`);
    // returns data from api call
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


function BentoGrid() {

  // use states are used to store the data from the API (top) and to only load data from the API when it is fetched (bottom)
  const [dataObject, setDataObject] = useState(""); 
  const [loaded, setLoaded] = React.useState(false);
    
  // React Hook essentially tells component that it needs to do something after it is rendered, in this case load the graph using api data
  useEffect(() => {
    // function used to call the fetchData function and map it to an object in chartJs format
    const fetchDataAndMap = async () => {
      try {
        // calls function to fetch api data
        const rawData = await fetchData("barbarian");
        // when api data is fetched the loader is set to true, this avoids a null reading error
        setLoaded(true);

        // mapping the data into the format that is required by chart.js
        let lineGraphData = {
          labels: rawData?.map((data)=>data.level),
          datasets: [{
            label: "prof bonus over levels",
            data: rawData?.map((data)=>data.prof_bonus),
            backgroundColor: '#51A1C5',
            tension: 0.1
          }]
        };
        
        // storing the mapped data obj in useCase, otherwise it will be lost.
        setDataObject(lineGraphData);
      } catch (error) {
        // Handle error
      }
    };

    // call the function to fetch api data (it was written above but not called)
    fetchDataAndMap();
  }, []);


  // this stores the options used by the line chart
  // this is stored in an object here so that it can be passed as a prop to the chart component
  // this is in chart js format
  let lineChartOpt = {
    plugins:{
      title: {
        display: true,
        text: "Proficiency Bonus of a Barbarian over levels"
      }
    },
    responsive : true,
    maintainAspectRatio : false,
    aspectRatio : 0.2,
  };

  // to be removed
  // =======================================================
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
// =======================================================

// option objects for other charts
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
// 
  return (
    // this forms the base for a css grid that will be manipulated into a Bento Grid
    <div className="wrapper">
      {/* this div contains a linegraph component */}
      <div className="grid1 grid-con">
        {/* this first checks the loaded userState, if it is true then the data is loaded and the graph can be rendered */}
        {/* if the loaded userstate is false then the container will be rendered without the graph */}
        {loaded && < LineGraph chartData={dataObject} chartOpt={lineChartOpt} />}
      </div>
      <div className="grid2 grid-con">
        <BarGraph chartData={bargraphData} />
      </div>
      <div className="grid3 grid-con">
        <Piechart chartData={piechartData} chartOpt = {pieChartOpt} />
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