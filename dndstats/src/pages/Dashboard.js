import "../App.css";
import Navbar from "../components/Navbar";
import HeaderBtn from "../components/HeaderBtn";

// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard(){
    return(
        <>
            <Navbar />
            <h1 className="dashboard-title">Adventurer's Almanac</h1>
            <Container fluid="md" className="header-con">
                <Row>
                    <Col><HeaderBtn where="Compare" /></Col>
                    <Col><HeaderBtn where="ViewSingle" /></Col>
                    <Col><HeaderBtn where = "ViewTimeline" /></Col>                    
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;