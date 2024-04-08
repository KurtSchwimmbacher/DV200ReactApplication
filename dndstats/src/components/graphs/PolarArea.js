// src/components/PieChart.js
import React from "react";
import { PolarArea } from "react-chartjs-2";

function PolarAreaChart({ chartData,chartOpt }) {
  return (
    <div className="chart-container">
      <PolarArea
        data={chartData}
        options={chartOpt}
      />
    </div>
  );
}
export default PolarAreaChart;