import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="weather-app">
      <h1>Weather-App</h1>
      <Weather defaultCity="New york" />
      <footer>
        {" "}
        <p>
          {" "}
          This project was code by{" "}
          <a
            href="mailto:moodupetemi2k5@gmail"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Modupetemi2k5
          </a>
          open sourced on
          <a
            href="https://github.com/Modupetemi2k5/react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
          Hosted on
          <a href="netlify" target="_blank" rel="noreferrer">
            {" "}
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
