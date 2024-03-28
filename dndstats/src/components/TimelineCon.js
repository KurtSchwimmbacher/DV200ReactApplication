// src/components/CompareCon.js
import React from "react";
import { useState, useEffect } from "react";
import "./TimelineCon.css";

// import chart.js 
// defaults can be used to change global settings for all graphs  
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";

// import all the chart components
import LineGraph from "./graphs/LineGraph";

// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

ChartJS.register(CategoryScale);
// global chart settings, they fit in the containers better with these defaults set this way.
defaults.maintainAspectRatio = false;
defaults.responsive = true;



function TimelineCon (props){

    return(
        <Container fluid="md" className="header-con">
            <Row>
                <Col>
                    <div className="linegraph-con">
                        {/* <LineGraph chartData={props.lineGraphData} chartOpt={props.lineGraphOpt} /> */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TimelineCon;