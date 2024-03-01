import "../App.css";
import Navbar from "../components/Navbar";

function Dashboard(){
    return(
        <>
            <Navbar />
            <h1 className="dashboard-title">Adventurer's Almanac</h1>
        </>
    );
}

export default Dashboard;