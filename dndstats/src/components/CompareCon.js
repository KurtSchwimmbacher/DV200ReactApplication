// src/components/CompareCon.js
import React from "react";
import { useState, useEffect } from "react";
import "./CompareCon.css";

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

// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from "./Modal";


import recommendedStatsData from '../data/RadarData.json';
import RangeSlider from "./RangeSlider";

ChartJS.register(CategoryScale);
// global chart settings, they fit in the containers better with these defaults set this way.
defaults.maintainAspectRatio = false;
defaults.responsive = true;

const fetchClassData = async (classParam) =>{
    try{
        // uses axios to make API call 
        const response = await Axios.get(`https://www.dnd5eapi.co/api/classes/${classParam}`);
        // returns data from api call
        console.log(response.data)
        return response.data;
        
    }
    catch (error){
        console.error('Error fetching data:', error);
        throw error;
    }
}

const fetchExtraData = async (endpoint) =>{
    try{
        let response = await Axios.get(`https://www.dnd5eapi.co/api/${endpoint}`);
        return response;
    }
    catch (error){
        console.error.apply('Error fetching data:', error);
        throw error;
    }
}

function CompareCon (){

    const handleClassSelect1 = (selectedClassName) => {
        setSelectedClass1(selectedClassName);
      };
    
      const handleClassSelect2 = (selectedClassName) => {
        setSelectedClass2(selectedClassName);
      };



      const [sliderValue, setSliderValue] = useState(1);

      // Function to handle changes in the slider value
      const handleSliderChange = (value) => {
        setSliderValue(value);
      };


      // use states are used to store the data from the API (top) and to only load data from the API when it is fetched (bottom)
        const [buildRadarData, setbuildRadarData] = useState(""); 
        const [buildRadarOpt, setbuildRadarOpt] = useState("");

        // for bar graphs
        const [profBarData, setProfBarData] = useState(""); 
        const [profBarOpt, setProfBarOpt] = useState("");

        const [healthBarData, setHealthBarData] = useState(""); 
        const [healthBarOpt, setHealthBarOpt] = useState("");

        // use state to control data loading and errors
        const [loaded, setLoaded] = React.useState(false);
        const [loadedProfBar, setLoadedProfBar] = React.useState(false);
        const [loadedHealthBar, setLoadedHealthBar] = React.useState(false);
        
        // to store the selected classes
        const [selectedClass1, setSelectedClass1] = useState("Select a Class");
        const [selectedClass2, setSelectedClass2] = useState("Select a Class");

        useEffect(()=>{

            const populateBuildRadarChart = async (chosenClass,competingClass) =>{
                try{
                    const classDataChosen = recommendedStatsData.classes.find(cls => cls.class === chosenClass);
                    const classDataCompete = recommendedStatsData.classes.find(cls => cls.class === competingClass);
                    // call the fetch data function
                    const abilityScores = await fetchExtraData("ability-scores");
                    
                    console.log(classDataChosen)
                    
                        // Extract the recommended stats from the class data
                        const data1 = classDataChosen.stats.map(stat => stat.recommended_score);
                        const data2 = classDataCompete.stats.map(stat => stat.recommended_score);
                  
                        // Map the data to the format required by Chart.js for a radar chart
                        let radarChartData = {
                          labels:  abilityScores.data.results.map((data)=>data.name),
                          datasets: [{
                            label: `${chosenClass} Recommended Ability Scores`,
                            data: data1,
                            backgroundColor: 'rgba(42, 80, 161, 0.2)',
                            borderColor: "#51A1C5",
                            tension: 0.1
                          },
                          {
                            label: `${competingClass} Recommended Ability Scores`,
                            data: data2,
                            backgroundColor: 'rgba(171, 109, 172, 0.2)',
                            borderColor: "#AB6DAC",
                            tension: 0.1
                          }]
                        }
                   
                    let statRadarOpt = {
                        scales:{
                            r: {
                                ticks: {
                                    color: 'black',
                                    backdropColor: "#FAF9F6"
                                },
                                min: 0,
                                max: 20,
                                stepSize: 1,
                              }
                        },
                        plugins: {
                          title: {
                            display: true,
                            text: `Comparison of Classes Recommended Stat Builds`
                          }
                        },
                        maintainAspectRatio : false,
                        aspectRatio : 0.3,
                    };
                      

                    // set data into use states
                    setbuildRadarData(radarChartData);
                    setbuildRadarOpt(statRadarOpt);
                    // data is loaded => set loaded to true
                    setLoaded(true);
                }
                catch(error){
                    
                }
            }

            const populateProfBarGraph = async (chosenClass,competingClass) =>{
                try{
                    // collects all data required from api
                    const skillsList = await fetchExtraData("skills");
                    const rawDataChosen= await fetchClassData(chosenClass);
                    const rawDataCompeting = await fetchClassData(competingClass); 

                    
                    let class1Name = rawDataChosen.name;
                    let class2Name = rawDataCompeting.name;

                    let dataClass1 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
                    let dataClass2 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

                    let arrayOfSkills = rawDataChosen.proficiency_choices[0].from.options.map((data)=>data.item.name)
                    for(let i = 0; i < arrayOfSkills.length; i++){
                        arrayOfSkills[i] = arrayOfSkills[i].split(":")[1].substring(1,arrayOfSkills[i].length);
                    }
                    
                    let arrayOfSkillsComp = rawDataCompeting.proficiency_choices[0].from.options.map((data)=>data.item.name)
                    for(let i = 0; i < arrayOfSkillsComp.length; i++){
                        arrayOfSkillsComp[i] = arrayOfSkillsComp[i].split(":")[1].substring(1,arrayOfSkillsComp[i].length);
                    }

                    let allSkills =  skillsList.data.results.map((data)=>data.name);
                    for(let i = 0; i< allSkills.length; i++){
                        for(let j = 0; j <arrayOfSkills.length; j++){
                            if(allSkills[i] === arrayOfSkills[j]){
                                dataClass1[i] = 1;
                            }
                        }
                        for(let j = 0; j < arrayOfSkillsComp.length;j++){
                            if(allSkills[i] === arrayOfSkillsComp[j]){
                                dataClass2[i] = 1;
                            }
                        }
                    }                    

                    // map data
                    let profBarGraphData = {
                        labels: skillsList.data.results.map((data)=>data.name),
                        datasets:[{
                            label: `${class1Name} Possible Skill Proficiencies`,
                            // replace with api data
                            data: dataClass1,
                            backgroundColor: "#51A1C5",
                            borderRadius:2
                        },
                        {
                            label: `${class2Name}  Possible Skill Proficiencies`,
                            // replace with api data
                            data: dataClass2,
                            backgroundColor: "#AB6DAC",
                            borderRadius:2
                        }]
                    }

                    let profBarGraphOpt = { 
                        scales:{
                            y: {
                                min: -1,
                                max: 1,
                                stepSize: 1,
                              },                              
                        },
                        responsive: true,
                        maintainAspectRatio :false,
                        plugins: {
                            title: {
                              display: true,
                              text: "Comparison of Skill Proficiency Choices"
                            }
                          }, 
                    }

                    setProfBarData(profBarGraphData);
                    setProfBarOpt(profBarGraphOpt);
                    setLoadedProfBar(true);
                }
                catch (error){
                    
                }
            }

            const populateHealthBarGraph = async (chosenClass,competingClass) =>{
                try{
                    const rawDataChosen= await fetchClassData(chosenClass);
                    const rawDataCompeting = await fetchClassData(competingClass); 

                    
                    let class1Name = rawDataChosen.name;
                    let class2Name = rawDataCompeting.name;
                    
                    let class1HPMax = (rawDataChosen.hit_die+5+1)*sliderValue;
                    let class2HPMax = (rawDataCompeting.hit_die+5+1)*sliderValue;
                    let class1HPAvg = ((rawDataChosen.hit_die)+1+1)*sliderValue;
                    let class2HPAvg = ((rawDataCompeting.hit_die)+1+1)*sliderValue;

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
                              text: `Comparison of Health Scores at level ${sliderValue} `
                            }
                          }, 
                    }
                    setHealthBarData(healthBarGraphData);
                    setHealthBarOpt(healthBarGraphOpt);
                    setLoadedHealthBar(true);
                }
                catch{

                }
            }
            

            const class1 = selectedClass1.toLowerCase();
            const class2 = selectedClass2.toLowerCase();

            // call the function to fetch api data (it was written above but not called)
            populateBuildRadarChart(selectedClass1,selectedClass2);
            populateProfBarGraph(class1,class2);
            populateHealthBarGraph(class1,class2);
        },[selectedClass1,selectedClass2,sliderValue]);

    return(
        <>
            <Container fluid="md" className="header-con">
                <Row>
                    <Col>
                        <h2 className="compare-sh">{selectedClass1}</h2>
                    </Col>
                    <Col>
                        <h2 className="compare-sh">{selectedClass2}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="classChoice class1">
                        <Modal onClassSelect={handleClassSelect1} />
                    </div>
                    </Col>
                    <Col>
                    <div className="classChoice class2">
                        <Modal onClassSelect={handleClassSelect2} />
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="range-slider-con">
                        <RangeSlider value={sliderValue} onChange={handleSliderChange} />
                    </Col>
                </Row>

                {/* rows for graph data */}
                {/*radar graphs */}
                <Row>
                    <Col>
                        <div className="two-chart">
                            {/* <p>RadarChart for stats</p> */}
                            {loaded && < RadarChart chartData={buildRadarData} chartOpt={buildRadarOpt} />}
                        </div>
                    </Col>
                    <Col>
                        <div className="two-chart">
                            <p>RadarChart for builds</p>
                        </div>
                    </Col>
                </Row>
                {/* bar graph */}
                <Row>
                    <Col>
                        <div className="bar-chart-main">
                            <p>Bar Graph for spells</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="three-chart">
                            <p>Bar Graph for race and class</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="three-chart">
                            {/* <p>Bar Graph for Proficiency</p> */}
                            {loadedProfBar && <BarGraph chartData={profBarData} chartOpt={profBarOpt} />}
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="three-chart">
                            {loadedHealthBar && <BarGraph chartData={healthBarData} chartOpt={healthBarOpt} />}
                        </div>
                    </Col>
                </Row>
                {/* pie charts */}
                <Row>
                    <Col>
                        <div className="two-chart">
                            <p>Pie Chart for spells</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="two-chart">
                            <p>Pie Chart for rests</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CompareCon;