import React from "react";
import "./dateComponent.css";
import moment from "moment";
export default function DateComponent({ date, active, setDateValue }) {
  // console.log(date);

  const dateVal = moment(date).format("D ddd");
  const split = dateVal.split(" ");
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
