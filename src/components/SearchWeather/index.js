import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./style.css";

const SearchWeather = ({ handleChangeWeather }) => {
  // state = {
  //   inputValue: "Curitiba",
  // };
  const [inputValue, setInputValue] = useState("Curitiba");

  useEffect(() => {
    handleSubmit();
  }, []);
  // componentDidMount() {
  //   this.handleSubmit();
  // }

  const handleSubmit = () => {
    // const { inputValue } = this.state;
    // const { handleChangeWeather } = this.props;

    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((response) => response.json())
      .then((response) => handleChangeWeather(response, inputValue));
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchWeather;
