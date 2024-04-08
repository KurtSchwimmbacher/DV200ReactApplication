import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import TimelineCon from "../components/TimelineCon";
import axios from "axios";
import Footer from "../components/Footer";

const fetchLevelData = async (classParam) =>{
    try{
        const response = await axios.get(`https://www.dnd5eapi.co/api/classes/${classParam}`);
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
                const classData = await fetchLevelData(chosenClass +"/levels");

                const classGeneralData = await fetchLevelData(chosenClass)

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
                            tension: 0.2
                        };
                        break;
                    case 'Health Over Levels':


                    const healthArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // Initialize array with base health

                    for (let i = 1; i < healthArr.length; i++) {
                        healthArr[i] = (classGeneralData.hit_die + 5 + 1) * i + healthArr[i - 1]; // Calculate health gained at current level and add to previous total
                        console.log(healthArr[i]); // Logging for debugging purposes
                    }

                    const avHealthArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // Initialize array with base health

                    for (let i = 1; i < avHealthArr.length; i++) {
                        avHealthArr[i] = ((classGeneralData.hit_die/2) + 1 + 1) * i + avHealthArr[i - 1]; // Calculate health gained at current level and add to previous total
                        console.log(avHealthArr[i]); // Logging for debugging purposes
                    }

                        linegraphData = {
                            labels: classData.map((data)=>data.level),
                            datasets:[{
                                label: "Maximum Health Over Levels",
                                data: healthArr,
                                backgroundColor: "#51A1C5",
                                borderRadius:2
                            },
                            {
                                label: "Average Health Over Levels",
                                data: avHealthArr,
                                backgroundColor: "#AB6DAC",
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
                            tension: 0.2
                        };
                        break;
                    case 'Spell Slots/Known Spells':
                        if(chosenClass === "bard" || chosenClass === "ranger" || chosenClass === "sorcerer" || chosenClass === "warlock"){
                            linegraphData = {
                                labels: classData.map((data)=>data.level),
                                datasets:[{
                                    label: "Data Over Levels",
                                    data: classData.map((data)=>data.spellcasting.spells_known),
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
                                        text: `Known Spells Over levels for ${chosenClass}`
                                    }
                                },
                                responsive : true,
                                maintainAspectRatio : false,
                                aspectRatio : 0.2,
                                tension: 0.2
                            };
                        }
                        else if(chosenClass === "barbarian" || chosenClass === "fighter" || chosenClass === "rogue" || chosenClass === "monk"){
                            lineChartOpt = {
                                scales:{
                                    y: {
                                        min: 0
                                      }
                                },
                                plugins:{
                                    title: {
                                        display: true,
                                        text: `This Class cannot learn spells`
                                    }
                                },
                                responsive : true,
                                maintainAspectRatio : false,
                                aspectRatio : 0.2,
                                tension: 0.2
                            };
                        }
                        else if(chosenClass === "wizard" || chosenClass === "cleric" || chosenClass === "druid" || chosenClass === "paladin"){
                            const spellSlotsOverLevel = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
                            
                            classData.map((data)=>{
                                console.log(data.spellcasting)
                                spellSlotsOverLevel[data.level-1] = data.spellcasting.cantrips_known + data.spellcasting.spell_slots_level_1 + data.spellcasting.spell_slots_level_2 +data.spellcasting.spell_slots_level_3 +data.spellcasting.spell_slots_level_4+data.spellcasting.spell_slots_level_5 + data.spellcasting.spell_slots_level_6 +data.spellcasting.spell_slots_level_7 +data.spellcasting.spell_slots_level_8 + data.spellcasting.spell_slots_level_9;
                                
                            })


                            linegraphData = {
                                labels: classData.map((data)=>data.level),
                                datasets:[{
                                    label: "Data Over Levels",
                                    data: spellSlotsOverLevel,
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
                                        text: `Spell Slots Over levels for ${chosenClass}`
                                    }
                                },
                                responsive : true,
                                maintainAspectRatio : false,
                                aspectRatio : 0.2,
                                tension: 0.2
                            };
                        }

                       

                        break;
                    case 'Features per Level':



                        linegraphData = {
                            labels: classData.map((data)=>data.level),
                            datasets:[{
                                label: "Data Over Levels",
                                data: classData.map((data)=>data.features.length),
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
                            tension: 0.2
                        };
                    
                        break;
                    case 'Class Specific Features':

                        let keyWord = " ";
                        let data = " ";
                        switch (chosenClass) {
                            case "barbarian":
                                keyWord = "Rage Count"
                                data = classData.map((data)=>data.class_specific.rage_count)
                                data[19] = 20;
                                break;
                            case "bard":
                                keyWord = "Bardic Inspiration Dice"
                                data = classData.map((data)=>data.class_specific.bardic_inspiration_die)
                                break;
                            case "cleric":
                                keyWord = "Channel Divinity Charges"
                                data = classData.map((data)=>data.class_specific.channel_divinity_charges)
                                break;
                            case "druid":
                                keyWord = "Wildshape Max CR"
                                data = classData.map((data)=>data.class_specific.wild_shape_max_cr)
                                break;
                            case "fighter":
                                keyWord = "Action Surges"
                                data = classData.map((data)=>data.class_specific.action_surges)
                                break;
                            case "monk":
                                keyWord = "Ki Points"
                                data = classData.map((data)=>data.class_specific.ki_points)
                                break;
                            case "paladin":
                                    keyWord = "Aura Range"
                                    data = classData.map((data)=>data.class_specific.aura_range)
                                    break;
                            case "ranger":
                                    keyWord = "Favoured Enemies"
                                    data = classData.map((data)=>data.class_specific.favored_enemies)
                                    break;
                            case "rogue":
                                    keyWord = "Sneak Attack Dice Count"
                                    data = classData.map((data)=>data.class_specific.sneak_attack.dice_count)
                                    break;
                            case "sorcerer":
                                    keyWord = "Sorcery Points"
                                    data = classData.map((data)=>data.class_specific.sorcery_points)
                                    break;
                            case "warlock":
                                    keyWord = "Invocations Known"
                                    data = classData.map((data)=>data.class_specific.invocations_known)
                                    break;
                            case "wizard":
                                    keyWord = "Arcane Recovery Levels"
                                    data = classData.map((data)=>data.class_specific.arcane_recovery_levels)
                                    break;
                            default:
                                break;
                        }

                        linegraphData = {
                            labels: classData.map((data)=>data.level),
                            datasets:[{
                                label: "Data Over Levels",
                                data: data,
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
                                    text: `${keyWord} Over levels for ${chosenClass}`
                                }
                            },
                            responsive : true,
                            maintainAspectRatio : false,
                            aspectRatio : 0.2,
                            tension: 0.2
                        };
                        break;
                    case 'XP Required To Reach Level':

                        const xpNeeded = [0,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000]

                        linegraphData = {
                            labels: classData.map((data)=>data.level),
                            datasets:[{
                                label: "Data Over Levels",
                                data: xpNeeded,
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
                                    text: `XP Points needed to Reach Level for ${chosenClass}`
                                }
                            },
                            responsive : true,
                            maintainAspectRatio : false,
                            aspectRatio : 0.2,
                            tension: 0.2
                        };
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
                <option>Health Over Levels</option>
                <option>Spell Slots/Known Spells</option>
                <option>Features per Level</option>
                <option>Class Specific Features</option>
                <option>XP Required To Reach Level</option>
            </select>
            {loaded && <TimelineCon lineGraphData={data} lineGraphOpt={options} />}
            <Footer where={"Timeline"} />
        </>
    );
}

export default Timeline;
