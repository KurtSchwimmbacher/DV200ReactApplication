// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function Piechart({ chartData,chartOpt }) {
  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={chartOpt}
      />
    </div>
  );
}
export default Piechart;