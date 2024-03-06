// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Ratio of website traffic"
            }
          }, 
        }}
      />
    </div>
  );
}
export default LineGraph;