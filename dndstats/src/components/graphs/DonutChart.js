// src/components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

function DonutChart({ chartData,chartOpt }) {
  return (
    <div className="chart-container">
      <Doughnut
        data={chartData}
        options={chartOpt}
      />
    </div>
  );
}
export default DonutChart;