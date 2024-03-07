import "../App.css";
import Navbar from "../components/Navbar";
// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Compare(){
    return(
        <>
            <Navbar where={"Compare"} />
            <h1 className="comp-title">Up in the Ring!</h1>
        </>
    );
}

export default Compare;