// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function Piechart({ chartData }) {
  return (
    <div className="chart-container">
      <Pie
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
export default Piechart;