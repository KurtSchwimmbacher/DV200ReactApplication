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
            <div style={{width: 700}}>
             {/* <BarGraph chartData={graphData} /> */}
           </div>
        </>
    );
}

export default Compare;