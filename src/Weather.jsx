import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(" ");
  let [humidity, setHumidity] = useState("");
  let [precipitation, setPrecipitation] = useState("");
  let [wind, setWind] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");
  let [city, setCity] = useState(props.defaultCity);
  let [date, setDate] = useState("");

  function getWeather(response) {
    setTemperature(response.data.temperature.current);
    setHumidity(response.data.temperature.humidity);
    setDescription(response.data.condition.description);
    setPrecipitation();
    setWind(response.data.wind.speed);
    setIcon(<img alt="icon" src={response.data.condition.icon_url} />);
    setCity(response.data.city);
    setDate(new Date(response.data.time * 1000));
    setReady(true);
  }

  function search() {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
  }
  function getSubmit(event) {
    event.preventDefault();
    search();
  }
  function getCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weatherf">
        <form onSubmit={getSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter-city"
                className="searchinput"
                onChange={getCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary submitinput"
              />
            </div>{" "}
          </div>
        </form>
        <Weatherinfo
          temp={temperature}
          humid={humidity}
          prec={precipitation}
          wind={wind}
          icon={icon}
          city={city}
          date={date}
          desc={description}
        />{" "}
        <WeatherForecast city={city} />
      </div>
    );
  } else {
    search();
    return "loading.....";
  }
}
