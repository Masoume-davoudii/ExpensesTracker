import React from "react";
import { BarChart } from "./BarChart";
import "./Chart.css";
export const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximiumValue = Math.max(...dataPointsValue);
  return (
    <div className="Chart">
      {props.dataPoints.map((item) => (
        <BarChart
          key={item.id}
          value={item.value}
          maxValue={maximiumValue}
          label={item.label}
        />
      ))}
    </div>
  );
};
