// src/components/PieChart.js
import React from "react";
import { Radar } from "react-chartjs-2";

function RadarChart({ chartData }) {
  return (
    <div className="chart-container">
      <Radar
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
export default RadarChart;