import React from "react";
import { Bar } from "react-chartjs-2";

function BarGraph({ chartData }) {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
            aspectRatio: 1,
          plugins: {
            title: {
              display: true,
              text: "Monthly Sales"
            }
          },
        }}
      />
    </div>
  );
}
export default BarGraph;