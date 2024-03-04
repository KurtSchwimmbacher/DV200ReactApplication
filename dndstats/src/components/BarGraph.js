import "../App.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import chart.js
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";


function BarGraph() {
  return (
    <Bar
        data={{
            labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            datasets:[
                {
                  label: "Revenue",
                  data:[200,300,400],
                  backgroundColor: [
                    '#51A1C5',
                    '#AB6DAC',
                    '#507F62'
                  ],
                },                
            ]
            
        }}
    />
  );
}

export default BarGraph;