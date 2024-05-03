import React, { useState } from "react";

export default function GetTemperature(props) {
  let [unit, setUnit] = useState("metric");

  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div>
        <span className="temp">{Math.round(props.temperature)}</span>
        <span className="deg">°</span>
        <span className="cent">
          C|
          <a href="./" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="deg">°</span>
        <span className="cent">
          <a href="./" onClick={showCelcius}>
            {" "}
            C|
          </a>
           F
        </span>
      </div>
    );
  }
}
