import "../App.css";
import Navbar from "../components/Navbar";
// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Compare(){
    return(
        <>
            <Navbar />
            <h1 className="dashboard-title">Up in the Ring!</h1>
        </>
    );
}

export default Compare;