import React from "react";

export default function Day(props) {
  console.log(props);
  function maxTemp() {
    let temperature = Math.round(props.code.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.code.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.code.time*1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="forecastinfo">
      <div className="forecastday">{day()}</div>
      <div className="forecastimg">
        {" "}
        <img src={props.code.condition.icon_utl} alt={props.code.condition.description} width="60px" />
      </div>
      <div className="forecasttemp">
        {" "}
        <span className="maxtemp">{maxTemp()}</span>
        <span className="mintemp">{minTemp()}</span>
      </div>
    </div>
  );
}
