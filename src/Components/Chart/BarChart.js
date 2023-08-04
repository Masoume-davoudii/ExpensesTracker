import React from "react";
import "./BarChart.css";
export const BarChart = (props) => {
  let fillHieght = "0%";
  if (props.value > 0) {
    fillHieght = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="bar-chart">
      <div className="inner_bar_chart">
        <div className="bar_chart_fill" style={{ height: fillHieght }}></div>
      </div>
      <div className="bar_chart_label">{props.label}</div>
    </div>
  );
};
