import { useState } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

const App = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  // state = {
  //   weather: {},
  //   city: "",
  // };

  const handleChangeWeather = (weatherData, city) => {
    setWeather(weatherData);
    setCity(city);
    // this.setState({ weather: weatherData, city: city });
  };

  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} />
      <DisplayWeather weather={weather} city={city} />
    </div>
  );
};

export default App;
