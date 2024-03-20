import React from "react";
import { Bar } from "react-chartjs-2";

function BarGraph({ chartData,chartOpt }) {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={chartOpt}
      />
    </div>
  );
}
export default BarGraph;