import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import TimelineCon from "../components/TimelineCon";
import axios from "axios";
import Footer from "../components/Footer";

const fetchLevelData = async (className) =>{
    try{
        const response = await axios.get(`https://www.dnd5eapi.co/api/classes/${className}/levels`);
        return response.data;
    }
    catch (error){
        console.error('Error fetching data:', error);
        throw error;
    }
}

function Timeline(){
    const [data, setData] = useState("");
    const [options, setOptions] = useState("");
    const [classes,setClasses] = useState([]);
    const [classChoice, setClassChoice] = useState("barbarian");
    const [loaded,setLoaded] = useState(false);
    const [graphParameter, setGraphParameter] = useState("Proficiency Bonus"); // New state for graph parameter

    useEffect(() => {
        const url = "https://www.dnd5eapi.co/api/classes";
        axios.get(url).then((response)=>{
            setClasses(response.data.results);
        })

        const mapDataFromAPI = async (chosenClass) =>{
            try{
                const classData = await fetchLevelData(chosenClass);
        
                let linegraphData = {};
                let lineChartOpt = {};
        
                switch (graphParameter) {
                    case 'Proficiency Bonus':
                        linegraphData = {
                            labels: classData.map((data)=>data.level),
                            datasets:[{
                                label: "Data Over Levels",
                                data: classData.map((data)=>data.prof_bonus),
                                backgroundColor: "#51A1C5",
                                borderRadius:2
                            }]
                        };
                        lineChartOpt = {
                            scales:{
                                y: {
                                    min: 0
                                  }
                            },
                            plugins:{
                                title: {
                                    display: true,
                                    text: `${graphParameter} Over levels for ${chosenClass}`
                                }
                            },
                            responsive : true,
                            maintainAspectRatio : false,
                            aspectRatio : 0.2,
                        };
                        break;
                    case 'some_other_parameter':
                        // Handle mapping for another parameter
                        break;
                    default:
                        // Handle default case
                        break;
                }
        
                setData(linegraphData);
                setOptions(lineChartOpt);
                setLoaded(true);
            }
            catch(error){
                console.error('Error fetching data:', error);
                let linegraphData = {
                    labels: [],
                    datasets:[{
                        label: "",
                        data: [],
                        backgroundColor: "#51A1C5",
                        borderRadius:2
                    }]
                }
                let lineChartOpt = {
                    scales:{
                        y: {
                            min: 0
                        }
                    },
                    plugins:{
                        title: {
                            display: true,
                            text: `There was an error displaying the information`
                        }
                    },
                    responsive : true,
                    maintainAspectRatio : false,
                    aspectRatio : 0.2,
                };
                setData(linegraphData);
                setOptions(lineChartOpt);
                setLoaded(true);
            }
        }
        

        mapDataFromAPI(classChoice);
    }, [graphParameter,classChoice]);


    return(
        <>
            <Navbar where={"Timeline"} />
            <h1 className="timeline-title">Rising the Ranks!</h1>
            <select className="dropdown-timeline-pg" onChange={(event)=>{
                let classChoice = event.target.value.toLowerCase();
                setClassChoice(classChoice);
            }}>
                {classes 
                ? classes.map((item) => {
                    return(
                        <option key={item.name} value={item.name} className="dropdown-class">{item.name}</option>
                    )
                })
                : null}
            </select>
            <select className="graph-parameter-input" onChange={(event) => setGraphParameter(event.target.value)} >
                <option>Proficiency Bonus</option>
                <option>Maximum Possible Health</option>
                <option>Average Health</option>
            </select>
            {loaded && <TimelineCon lineGraphData={data} lineGraphOpt={options} />}
            <Footer where={"Timeline"} />
        </>
    );
}

export default Timeline;
