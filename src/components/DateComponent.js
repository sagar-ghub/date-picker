import React from "react";
import "./dateComponent.css";
export default function DateComponent({ date, active, setDateValue }) {
  const split = date.split(" ");
  return (
    <div
      className={`dateComponent ${active ? "active" : ""}`}
      onClick={() => setDateValue(date)}
    >
      <div>
        {split[0]}
        <br />
        {split[1]}
      </div>
      <div class="square-cut">ssas</div>
    </div>
  );
}
