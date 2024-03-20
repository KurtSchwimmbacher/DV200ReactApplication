// src/components/PieChart.js
import React from "react";
import { Radar } from "react-chartjs-2";

function RadarChart({ chartData,chartOpt }) {
  return (
    <div className="chart-container">
      <Radar
        data={chartData}
        options={chartOpt}
      />
    </div>
  );
}
export default RadarChart;