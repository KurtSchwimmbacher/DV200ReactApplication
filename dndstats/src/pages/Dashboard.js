import "../App.css";
import Navbar from "../components/Navbar";
import HeaderBtn from "../components/HeaderBtn";

function Dashboard(){
    return(
        <>
            <Navbar />
            <h1 className="dashboard-title">Adventurer's Almanac</h1>
            <HeaderBtn where="Compare" />
            <HeaderBtn where="ViewSingle" />
            <HeaderBtn where = "ViewTimeline" />
        </>
    );
}

export default Dashboard;