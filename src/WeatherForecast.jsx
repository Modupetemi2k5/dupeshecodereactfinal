import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastinfo from "./WeatherForecastinfo";
export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function getForecast(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index <= 5) {
              return (
                <div className="col">
                  <WeatherForecastinfo code={dailyforecast} />
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    );
  } else{
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${encodeURIComponent(
      props.city
    )}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(getForecast);
    return "fetching forecast.........";
  }
}
