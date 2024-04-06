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
    const response = await Axios.get(`https://www.dnd5eapi.co/api/classes/${classParam}`);
    // returns data from api call
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
const fetchClassSpelllist = async (className,level) =>{
  try{
      let response = await Axios.get(`https://api.open5e.com/v1/spells/?dnd_class__icontains=${className}&spell_level=${level}`);
      return response;
  }
  catch (error){
      console.error.apply('Error fetching data:', error);
      throw error;
  }
}

function BentoGrid() {

  // use states are used to store the data from the API (top) and to only load data from the API when it is fetched (bottom)
  const [dataObject, setDataObject] = useState(""); 
  const [loaded, setLoaded] = React.useState(false);

  const [barGraphObj, setBarGraphObj] = useState("");
  const [barGraphOpt, setBarGraphOpt] = useState("");
  const [spellPieObj, setSpellPieObj] = useState("");
  const [spellPieOpt, setSpellPieOpt] = useState("");
  const [spellPieObj2, setSpellPieObj2] = useState("");
  const [spellPieOpt2, setSpellPieOpt2] = useState("");
  const[loadedbar, setLoadedBar] = useState(false);
  const[loadedSpellPie, setLoadedSpellPie] = useState(false);
    
  // React Hook essentially tells component that it needs to do something after it is rendered, in this case load the graph using api data
  useEffect(() => {
    // function used to call the fetchData function and map it to an object in chartJs format
    const fetchDataAndMap = async () => {
      try {
        // calls function to fetch api data
        const rawData = await fetchData("barbarian/levels");
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

    const fetchDataAndMapBarGraph = async () => {
      try {
        const rawDataChosen= await fetchData('barbarian');
      const rawDataCompeting = await fetchData('cleric');

      let class1Name = rawDataChosen.name;
      let class2Name = rawDataCompeting.name;
      
      let class1HPMax = (rawDataChosen.hit_die+5+1);
      let class2HPMax = (rawDataCompeting.hit_die+5+1);
      let class1HPAvg = ((rawDataChosen.hit_die)+1+1);
      let class2HPAvg = ((rawDataCompeting.hit_die)+1+1);

       // map data
      let healthBarGraphData = {
        labels: ["Max Health" , "Average Health"],
        datasets:[{
            label: `${class1Name} Health Stats`,
            // replace with api data
            data: [class1HPMax,class1HPAvg],
            backgroundColor: "#51A1C5",
            borderRadius:2
        },
        {
            label: `${class2Name} Health Stats`,
            // replace with api data
            data: [class2HPMax,class2HPAvg],
            backgroundColor: "#AB6DAC",
            borderRadius:2
        }]
      }

      let healthBarGraphOpt = { 
        responsive: true,
        maintainAspectRatio :false,
        plugins: {
          title: {
            display: true,
            text: `Comparison of Health Scores at level 1 `
          }
        }, 
      }
      setBarGraphObj(healthBarGraphData);
      setBarGraphOpt(healthBarGraphOpt);
      setLoadedBar(true);
      } catch (error) {
        
      }
    }

    const fetchDataAndMapSpellPie = async () => {
      try {
        let spellList = (await fetchClassSpelllist("Sorcerer",1)).data.results;
        let spellList2 = (await fetchClassSpelllist("Cleric",1)).data.results;
        
        const class1Name = "Sorcerer";
        const class2Name = "Cleric";
        const spellSchoolName = ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"];

        const spellSchoolData = [
            {school : "abjuration",count : 0},
            {school : "conjuration",count : 0},
            {school : "divination",count : 0},
            {school : "enchantment",count : 0},
            {school : "evocation",count : 0},
            {school : "illusion",count : 0},
            {school : "necromancy",count : 0},
            {school : "transmutation",count : 0},
        ];
        const spellSchoolData2 = [
            {school : "abjuration",count : 0},
            {school : "conjuration",count : 0},
            {school : "divination",count : 0},
            {school : "enchantment",count : 0},
            {school : "evocation",count : 0},
            {school : "illusion",count : 0},
            {school : "necromancy",count : 0},
            {school : "transmutation",count : 0},
        ];
        
        // map data
        spellSchoolData.forEach(school =>{
            spellList.forEach(spell=>{
                if(school.school === spell.school.toLowerCase()){
                    school.count ++;
                }                        
            })
        })
        spellSchoolData2.forEach(school =>{
            spellList2.forEach(spell=>{
                if(school.school === spell.school.toLowerCase()){
                    school.count ++;
                }                        
            })
        })
        

         // Chart.js data
        const spellPieChartData = {
            labels: spellSchoolName,
            datasets: [{
                label: `${class1Name} Spell Ratio`,
                data: spellSchoolData.map(school => school.count),
                backgroundColor: ["#2A50A1", "#AB6DAC", "#507F62", "#51A1C5", "#8ED8B7", "#C899F4", "#F0F097", "#91A1B2"],
                borderRadius: 2
            }]
        };

         // Chart.js data
         const spellPieChartData2 = {
            labels: spellSchoolName,
            datasets: [{
                label: `${class2Name} Spell Ratio`,
                data: spellSchoolData2.map(school => school.count),
                backgroundColor:["#2A50A1", "#AB6DAC", "#507F62", "#51A1C5", "#8ED8B7", "#C899F4", "#F0F097", "#91A1B2"],
                borderRadius: 2
            }]
        };

        // Chart.js options
        const spellPieChartOptions = {
            plugins: {
                title: {
                    display: true,
                    text: `Spell Schools for ${class1Name} level 1`
                }
            },
            maintainAspectRatio: false,
            aspectRatio: 3,
            response : true,
        };
        // Chart.js options
        const spellPieChartOptions2 = {
            plugins: {
                title: {
                    display: true,
                    text: `Spell Schools for ${class2Name} level 1`
                }
            },
            maintainAspectRatio: false,
            aspectRatio: 3,
            response : true,
        };



      setSpellPieObj(spellPieChartData);
      setSpellPieOpt(spellPieChartData2);
      setSpellPieObj2(spellPieChartOptions);
      setSpellPieOpt2(spellPieChartOptions2);
      setLoadedSpellPie(true);
    } catch (error) {
        
    }
    }

    // call the function to fetch api data (it was written above but not called)
    fetchDataAndMap();
    fetchDataAndMapBarGraph();
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


// =======================================================

// option objects for other charts
      let pieChartOpt = {
        response : true,
        plugins: {
          title: {
            display: true,
            text: "Ratio of website traffic"
          }
        }, 
        maintainAspectRatio : false,
        aspectRatio : 0.3,
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
        {loadedbar && <BarGraph chartData={barGraphObj} chartOpt={barGraphOpt} />}
      </div>
      <div className="grid3 grid-con">
        {/* <Piechart chartData={piechartData} chartOpt = {pieChartOpt} /> */}
      </div>
      <div className="grid4 grid-con">
        <div className="pie-col"><Piechart chartData={spellPieObj} chartOpt={spellPieOpt} /></div>
        <div className="pie-col"><Piechart chartData={spellPieObj2} chartOpt={spellPieObj2} /></div>
      </div>
      <div className="grid5 grid-con">
       <p>add stat radar graph</p>
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