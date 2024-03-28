import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import TimelineCon from "../components/TimelineCon";
import axios from "axios";
import Footer from "../components/Footer";

const fetchLevelData = async (className) =>{
    try{
        // uses axios to make API call 
        const response = await axios.get(`https://www.dnd5eapi.co/api/classes/${className}/levels`);
        // returns data from api call
        
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

    useEffect(() => {
        const url = "https://www.dnd5eapi.co/api/classes";
        axios.get(url).then((response)=>{
            setClasses(response.data.results);
        })

        const mapDataFromAPI = async (chosenClass) =>{
            try{
                const classData = await fetchLevelData(chosenClass);
                console.log(classData);

                // map data
                let linegraphData = {
                    labels: classData.map((data)=>data.level),
                    datasets:[{
                        label: "Data over Level",
                        // replace with api data
                        data: classData.map((data)=>data.prof_bonus),
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
                        text: `Data Over levels for ${chosenClass}`
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
            catch{
                const classData = await fetchLevelData(chosenClass);
                console.log(classData);

                // map data
                let linegraphData = {
                    labels: classData.map((data)=>data.level),
                    datasets:[{
                        label: "",
                        // replace with api data
                        data: "",
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

    // call the function to fetch api data (it was written above but not called)
    mapDataFromAPI(classChoice);
    }, [classChoice]);


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
            {loaded && <TimelineCon lineGraphData={data} lineGraphOpt={options} />}
            <Footer where={"Timeline"} />
        </>
    );
}

export default Timeline;