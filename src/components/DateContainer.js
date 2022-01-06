import React, { useState, useEffect } from "react";
import DateComponent from "./DateComponent";
import moment from "moment";
import "./dateContainer.css";
export default function DateContainer() {
  const currentDate = moment();
  const [dateValue, setDateValue] = useState(currentDate.format("D ddd"));

  const [dateStart, setDateStart] = useState(
    currentDate.clone().startOf("week")
  );
  const [dateEnd, setDateEnd] = useState(currentDate.clone().endOf("week"));
  const month = currentDate.format("MMM YYYY");

  const [days, setDays] = useState([]);

  const getDays = (startDate) => {
    let temp = [];

    for (let i = 0; i <= 6; i++) {
      temp.push(moment(startDate).add(i, "days").format("D ddd"));
    }
    setDays([...temp]);
  };
  useEffect(() => {
    // let temp = [];

    // for (let i = 0; i <= 6; i++) {
    //   temp.push(moment(dateStart).add(i, "days").format("D ddd"));
    // }
    // setDays([...temp]);
    getDays(dateStart);
  }, []);

  const handleArrow = (arrow) => {
    if (arrow === "left") {
      // setDateValue(moment(dateValue).subtract(1, "days").format("D ddd"));
      //   let temp = [];

      //   for (let i = 0; i <= 6; i++) {
      //     temp.push(
      //       moment(moment(dateStart).subtract(1, "days"))
      //         .add(i, "days")
      //         .format("D ddd")
      //     );
      //   }
      getDays(moment(dateStart).subtract(1, "days"));
      setDateStart(moment(dateStart).subtract(1, "days"));
      //   console.log(temp);
      //   setDays([...temp]);
    } else {
      //   let temp = [];

      //   for (let i = 0; i <= 6; i++) {
      //     temp.push(
      //       moment(moment(dateStart).add(1, "days"))
      //         .add(i, "days")
      //         .format("D ddd")
      //     );
      //   }
      getDays(moment(dateStart).add(1, "days"));
      setDateStart(moment(dateStart).add(1, "days"));
      //   console.log(temp);
      //   setDays([...temp]);
    }
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        {month}
        {/* <div class="datepicker-toggle">
          <span class="datepicker-toggle-button"></span>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </div> */}
        <label for="datepicker">
          Pick a Date
          <input type="text" id="datepicker" autocomplete="off" />
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <div class="left" onClick={() => handleArrow("left")}></div>
        {days.map((day, index) => (
          <DateComponent
            active={dateValue === day ? true : false}
            date={day}
            setDateValue={setDateValue}
          />
        ))}
        <div class="right" onClick={() => handleArrow("right")}></div>
        {/* <DateComponent active={false} date={date} />
        <DateComponent active={true} date={date} />
        <DateComponent active={false} date={date} /> */}
      </div>
    </div>
  );
}
