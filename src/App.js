import React from "react";
import "./app.css";

import moment from "moment";
import DateContainer from "./components/DateContainer";
export default function App() {
  const date = moment().format("d ddd ");

  return (
    <div className="App">
      <DateContainer />
    </div>
  );
}
