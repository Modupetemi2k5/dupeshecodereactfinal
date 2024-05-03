import React from "react";
import GetDate from "./GetDate";
import GetTemperature from "./GetTemperature";
export default function Weather(props) {
  return (
    <div className="information">
      <div className="des-dat">
        {" "}
        <h2>{props.city}</h2>
        <p>
          <ul>
            <li>
              <GetDate date={props.date} />
            </li>
            <li>Descpription:{props.desc}</li>
          </ul>
        </p>
      </div>

      <div className="row">
        <div className="col-6  temp-img">
          <img src={props.icon} alt={props.desc} width="80px" />
          <GetTemperature temperature={props.temp} />
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation:{props.prec}</li>
            <li>Humidity:{props.humid}</li>
            <li>Wind:{props.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
