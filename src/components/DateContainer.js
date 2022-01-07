import React, { useState, useEffect } from "react";
import DateComponent from "./DateComponent";
import moment from "moment";
import "./dateContainer.css";
export default function DateContainer() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [dateValue, setDateValue] = useState(currentDate);

  const [dateStart, setDateStart] = useState(
    currentDate.clone().startOf("week")
  );

  const [days, setDays] = useState([]);
  const getDays = (startDate) => {
    let temp = [];
    for (let i = 0; i <= 6; i++) {
      temp.push(moment(startDate).add(i, "days"));
    }
    setDays([...temp]);
    console.log(dateValue, temp);
  };
  useEffect(() => {
    getDays(dateStart);
  }, []);

  useEffect(() => {
    let start = dateValue.clone().startOf("week");
    getDays(start);
    // console.log(moment(dateValue, "D ddd").isValid());
    // let start = moment(dateValue, "D ddd");
    // console.log(start.toDate());
    //console.log(start.clone().startOf("week"));
    // getDays(dateValue.startOf("week"));
  }, [dateValue]);

  const handleArrow = (arrow) => {
    if (arrow === "left") {
      getDays(moment(dateStart).subtract(1, "days"));
      setDateStart(moment(dateStart).subtract(1, "days"));
    } else {
      getDays(moment(dateStart).add(1, "days"));
      setDateStart(moment(dateStart).add(1, "days"));
    }
  };
  const handleDateOpen = () => {
    const datePicker = document.getElementById("datePicker");

    console.log(datePicker);
  };
  return (
    <div style={{ width: "510px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <br />
        {dateValue.format("MMMM YYYY")}
        <div class="datepicker-toggle">
          <input
            type="date"
            id="datePicker"
            name="trip-start"
            value={currentDate.format("YYYY-MM-DD")}
            onChange={(e) => {
              setDateValue(moment(e.target.value));
            }}
          />
          <span onClick={handleDateOpen}> More Dates</span>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div class="left" onClick={() => handleArrow("left")}></div>
        {days.map((day, index) => (
          <DateComponent
            active={
              dateValue.format("MM-DD-YYYY") === day.format("MM-DD-YYYY")
                ? true
                : false
            }
            date={day}
            setDateValue={setDateValue}
          />
        ))}
        <div class="right" onClick={() => handleArrow("right")}></div>
      </div>
    </div>
  );
}
