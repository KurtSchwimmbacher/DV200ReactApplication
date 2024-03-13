// src/components/CompareCon.js
import React from "react";
import { useState, useEffect } from "react";
import "./CompareCon.css";

// import chart.js 
// defaults can be used to change global settings for all graphs  
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";

// import all the chart components
import Piechart from "./graphs/Piechart";
import BarGraph from "./graphs/BarGraph";
import RadarChart from "./graphs/RadarChart";
import LineGraph from "./graphs/LineGraph";

// import bootstap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

ChartJS.register(CategoryScale);
// global chart settings, they fit in the containers better with these defaults set this way.
defaults.maintainAspectRatio = false;
defaults.responsive = true;


function CompareCon (){

    return(
        <>
            <Container fluid="md" className="header-con">
                <Row>
                    <Col>
                        <h2 className="compare-sh">Class 1</h2>
                    </Col>
                    <Col>
                        <h2 className="compare-sh">Class 2</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="classChoice">
                        <p>opt1</p>
                    </div>
                    </Col>
                    <Col>
                    <div className="classChoice">
                        <p>opt2</p>
                    </div>
                    </Col>
                </Row>

                {/* rows for graph data */}
                {/*radar graphs */}
                <Row>
                    <Col>
                        <div className="two-chart">
                            <p>RadarChart for stats</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="two-chart">
                            <p>RadarChart for builds</p>
                        </div>
                    </Col>
                </Row>
                {/* bar graph */}
                <Row>
                    <Col>
                        <div className="bar-chart-main">
                            <p>Bar Graph for spells</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="three-chart">
                            <p>Bar Graph for race and class</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="three-chart">
                            <p>Bar Graph for Proficiency</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="three-chart">
                            <p>Bar Graph for Health</p>
                        </div>
                    </Col>
                </Row>
                {/* pie charts */}
                <Row>
                    <Col>
                        <div className="two-chart">
                            <p>Pie Chart for spells</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="two-chart">
                            <p>Pie Chart for rests</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CompareCon;