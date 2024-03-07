import "../App.css";
import Navbar from "../components/Navbar";

function Timeline(){
    return(
        <>
            <Navbar where={"Timeline"} />
            <h1 className="timeline-title">Rising the Ranks!</h1>
        </>
    );
}

export default Timeline;