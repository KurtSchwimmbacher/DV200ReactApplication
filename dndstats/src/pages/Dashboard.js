import "../App.css";
import Navbar from "../components/Navbar";
import HeaderBtn from "../components/HeaderBtn";


// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BentoGrid from "../components/BentoGrid";





function Dashboard(){
    

    return(
        <>
            <Navbar />
            <h1 className="dashboard-title">Adventurer's Almanac</h1>
            <p className="dashboard-subtitle">
                Adventurer’s Almanac takes data from the open5e API to 
                allow for comparisons between different Dungeons and Dragons
                classes, and therefore different Baldur’s Gate 3 Classes 
                as well. We use the data from the API to formulate graphs to 
                compare several aspects of the classes, such as Hit Points 
                and spells! 
            </p>
            <Container fluid="md" className="header-con">
                <Row>
                    <Col><HeaderBtn where="Compare" /></Col>
                    <Col><HeaderBtn where="BG3" /></Col>
                    <Col><HeaderBtn where = "ViewTimeline" /></Col>                    
                </Row>

                <Row>
                <BentoGrid />
                </Row>
            </Container>
           
           
            

        </>
    );
}

export default Dashboard;