import React, { useEffect } from "react";
import axios from "axios";

const ICON_URL = "https://openweathermap.org/img/wn/10d@2x.png";

export default function DisplayData({ data }) {
  return (
    <div className="displayCon">
      <h1>{data.name}</h1>
      <p>
        <span>Temparature:</span>
        {data.main.temp}
      </p>
      <p>
        <span>Weather:</span>
        {data.weather[0].main}
      </p>
      <p>
        <span>Description:</span>
        {data.weather[0].description}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt=""
      />
    </div>
  );
}
