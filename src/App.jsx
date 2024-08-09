import axios from "axios";
import { useState } from "react";
import DisplayData from "../Components/DisplayData";
import "./App.css"

const API_KEY = "b9624f85e1547cfad7e1336982902cd7";
const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
const GOOGLE_API =
  "http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  const fetchLocation = async (city) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${5}&appid=${API_KEY}`
      );
      return response.data[0];
    } catch (e) {
      console.error(e);
    }
  };

  const fetchWeatherData = async (city) => {
    const location = await fetchLocation(city);
    const { lat, lon } = location;
    const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setData([response.data]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchWeatherData(city);
    console.log(data);
  };

  return (
    <div className="con">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="city"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {
        data.map((item, index)=>{
          return <DisplayData key={index} data={item}/>
        })
      }
    </div>
  );
}

export default App;
