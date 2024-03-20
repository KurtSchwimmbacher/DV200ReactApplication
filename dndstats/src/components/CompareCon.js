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
import LineGraph from "./graphs/LineGraph";

// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    // replace with data chosen by user
    let selectedClass1 = "wizard";
    let selectedClass2 = "bard";

      // use states are used to store the data from the API (top) and to only load data from the API when it is fetched (bottom)
        const [buildRadarData, setbuildRadarData] = useState(""); 
        const [buildRadarOpt, setbuildRadarOpt] = useState("");

        // for bar graphs
        const [profBarData, setProfBarData] = useState(""); 
        const [profBarOpt, setProfBarOpt] = useState("");

        // use state to control data loading and errors
        const [loaded, setLoaded] = React.useState(false);
        const [noData, setNoData] = React.useState(false);
        

        useEffect(()=>{
            setLoaded(false);
            setNoData(false);

            const populateBuildRadarChart = async (chosenClass,competingClass) =>{
                try{
                    // call the fetch data function
                    const abilityScores = await fetchExtraData("ability-scores");
                    const rawDataChosen= await fetchClassData(chosenClass);
                    const rawDataCompeting = await fetchClassData(competingClass);
                    
                    let class1Name = rawDataChosen.name;
                    let class2Name = rawDataCompeting.name;
                    // 
                    // let abilityVals =rawData.saving_throws?.map((data)=>data.name)

                    // map data
                    let statRadar = {
                        labels:  abilityScores.data.results.map((data)=>data.name),
                        datasets:[{
                            label: `${class1Name} Recommended Ability Scores`,
                            // replace with api data
                            data: [15,10,15,10,10,10],
                            backgroundColor: 'rgba(42, 80, 161, 0.2)',
                            borderColor: "#2A50A1",
                            tension: 0.1
                        },
                        {
                            label: `${class2Name} Recommended Ability Scores`,
                            // replace with api data
                            data: [10,13,15,10,12,16],
                            backgroundColor: 'rgba(171, 109, 172, 0.2)',
                            borderColor: "#AB6DAC",
                            tension: 0.1
                        }]
                    };
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
                    setbuildRadarData(statRadar);
                    setbuildRadarOpt(statRadarOpt);
                    // data is loaded => set loaded to true
                    setLoaded(true);
                }
                catch(error){
                    setLoaded(false);
                    setNoData(true);
                }
            }

            const populateProfBarGraph = async (chosenClass,competingClass) =>{
                try{
                    // collects all data required from api
                    const skillsList = await fetchExtraData("skills");
                    const rawDataChosen= await fetchClassData(chosenClass);
                    const rawDataCompeting = await fetchClassData(competingClass); 

                    console.log(skillsList)
                    let class1Name = rawDataChosen.name;
                    let class2Name = rawDataCompeting.name;

                    // map data
                    let profBarGraphData = {
                        labels: skillsList.data.results.map((data)=>data.name),
                        datasets:[{
                            label: `${class1Name} Possible Skill Proficiencies`,
                            // replace with api data
                            data: [15,10,15,10,10,10],
                            backgroundColor: "#2A50A1",
                            borderRadius:2
                        },
                        {
                            label: `${class2Name}  Possible Skill Proficiencies`,
                            // replace with api data
                            data: [10,13,15,10,12,16],
                            backgroundColor: "#AB6DAC",
                            borderRadius:2
                        }]
                    }

                    let profBarGraphOpt = {
                        plugins: {
                            title: {
                              display: true,
                              text: "Comparison of Skill Proficiency Choices"
                            }
                          }, 
                          maintainAspectRatio : false,
                          aspectRatio : 1,
                    }

                    setProfBarData(profBarGraphData);
                    setProfBarOpt(profBarGraphOpt);
                }
                catch (error){
                    setLoaded(false);
                    setNoData(true);
                }
            }

            // call the function to fetch api data (it was written above but not called)
            populateBuildRadarChart(selectedClass1,selectedClass2);
            populateProfBarGraph(selectedClass1,selectedClass2);
        },[]);

    return(
        <>
            <Container fluid="md" className="header-con">
                <Row>
                    <Col>
                        <h2 className="compare-sh">Class 1</h2>
                    </Col>
                    <Col>
                        <h2 className="compare-sh">Class 2</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="classChoice class1">
                        <p>opt1</p>
                    </div>
                    </Col>
                    <Col>
                    <div className="classChoice class2">
                        <p>opt2</p>
                    </div>
                    </Col>
                </Row>

                {/* rows for graph data */}
                {/*radar graphs */}
                <Row>
                    <Col>
                        <div className="two-chart">
                            {/* <p>RadarChart for stats</p> */}
                            {loaded && < RadarChart chartData={buildRadarData} chartOpt={buildRadarOpt} />}
                            {noData && <h4>No Data has been selected</h4>}
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
                            {loaded && <BarGraph chartData={profBarData} chartOpt={profBarOpt} />}
                            {noData && <h4>No Data has been selected</h4>}
                        </div>
                    </Col>
                    <Col>
                        <div className="three-chart">
                            <p>Bar Graph for Health</p>
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