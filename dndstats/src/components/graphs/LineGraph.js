// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph({ chartData,chartOpt }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={chartOpt}
      />
    </div>
  );
}
export default LineGraph;