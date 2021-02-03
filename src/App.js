import React, { useState, useEffect } from "react";
import moment from "moment";
import Wrapper from "./components/Wrapper";
import { Container, Row } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import SearchHistory from "./components/SearchHistory";
import CurrentWeather from "./components/CurrentWeather";
import ForecastCard from "./components/ForecastCard";
import API from "./utils/API";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [cities, setCities] = useState([]);
  const [currentWeatherCard, setCurrentWeatherCard] = useState();
  const [forecastCards, setForecastCards] = useState();

  useEffect(() => {
    // localStorage.clear();
    // Grab any stored cities
    const storedCities = JSON.parse(localStorage.getItem("cities"));

    // If storedCities is not null, set cities state to stored cities and render cities
    if (storedCities !== null) {
      setCities(storedCities);
    }
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Push user-inputted city into cities array, unshift to move them to beginning of array
    cities.unshift(searchInput);

    // Get rid of duplicate entries
    const uniqueCities = new Set(cities);
    const newCities = [...uniqueCities];

    // Save cities to local storage
    localStorage.setItem("cities", JSON.stringify(cities));

    // Clear search input form
    setSearchInput("");

    // Set cities array to the newCities array with duplicates removed
    setCities(newCities);

    // Make API calls
    runAPIs(searchInput);
  };

  const handleClick = (event) => {
    runAPIs(event.target.value);
  };

  const runAPIs = (city) => {
    // Make an API call to openweathermap.org
    API.getCurrentWeather(city).then((response) => {
      const currentDate = moment().format("MM/DD/YYYY");
      const cityName = response.data.name;
      const temp = response.data.main.temp;
      const humidity = response.data.main.humidity;
      const windSpeed = response.data.wind.speed;
      const iconURL =
        "https://openweathermap.org/img/w/" +
        response.data.weather[0].icon +
        ".png";

      const lat = response.data.coord.lat;
      const lon = response.data.coord.lon;

      API.getUVI(lat, lon).then((uviResponse) => {
        const uvi = uviResponse.data.current.uvi;

        const uviStyle = {
          borderRadius: "0.25rem",
          fontSize: "1rem",
          padding: "5px",
        };

        if (uvi < 3) {
          // Give it the color of green
          uviStyle.backgroundColor = "#99cc00";
        } else if (uvi >= 3 && uvi < 6) {
          // Give it the color of yellow
          uviStyle.backgroundColor = "#ffff01";
        } else if (uvi >= 6 && uvi < 8) {
          // Give it the color of orange
          uviStyle.backgroundColor = "#ff9928";
        } else if (uvi >= 8 && uvi < 11) {
          // Give it the color of red
          uviStyle.backgroundColor = "#ff0100";
        } else if (uvi >= 11) {
          // Give it the color of purple
          uviStyle.backgroundColor = "#be00be";
        }

        setCurrentWeatherCard(
          <CurrentWeather
            cityName={cityName}
            currentDate={currentDate}
            iconURL={iconURL}
            temp={temp}
            humidity={humidity}
            windSpeed={windSpeed}
            uvi={uvi}
            uviStyle={uviStyle}
          />
        );
      });
    });

    API.getForecast(city).then((response) => {
      const currentHour = moment().format("HH");

      // Set default time block of three hours to 12 AM
      let currentTimeBlock = "00:00:00";

      // Change the current time block of three hours based on currentHour
      if (currentHour >= 0 && currentHour < 3) {
        currentTimeBlock = "00:00:00";
      } else if (currentHour >= 3 && currentHour < 6) {
        currentTimeBlock = "03:00:00";
      } else if (currentHour >= 6 && currentHour < 9) {
        currentTimeBlock = "06:00:00";
      } else if (currentHour >= 9 && currentHour < 12) {
        currentTimeBlock = "09:00:00";
      } else if (currentHour >= 12 && currentHour < 15) {
        currentTimeBlock = "12:00:00";
      } else if (currentHour >= 15 && currentHour < 18) {
        currentTimeBlock = "15:00:00";
      } else if (currentHour >= 18 && currentHour < 21) {
        currentTimeBlock = "18:00:00";
      } else if (currentHour >= 21 && currentHour < 24) {
        currentTimeBlock = "21:00:00";
      }

      const forecasts = response.data.list.filter((element) =>
        element.dt_txt.includes(currentTimeBlock)
      );

      setForecastCards(
        <div className="col-12">
          <h3 style={{ marginTop: "20px" }}>5-Day Forecast</h3>
          <div
            className="row"
            style={{ marginLeft: "-15px", marginRight: "-15px" }}
          >
            {forecasts.map((forecast) => (
              <ForecastCard
                key={forecast.dt}
                date={moment(forecast.dt_txt).format("MM/DD/YYYY")}
                iconURL={
                  "https://openweathermap.org/img/w/" +
                  forecast.weather[0].icon +
                  ".png"
                }
                temp={forecast.main.temp}
                humidity={forecast.main.humidity}
              />
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <Wrapper>
      <Jumbotron />
      <Row>
        <div className="sidenav col-sm-3">
          <SearchForm
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            searchInput={searchInput}
          />
          {cities.map((city) => (
            <SearchHistory
              key={city}
              searchInput={city}
              handleClick={handleClick}
            />
          ))}
        </div>
        <div className="col-sm-9">
          <Container>
            <Row>
              <div className="col-12">{currentWeatherCard}</div>
              {forecastCards}
            </Row>
          </Container>
        </div>
      </Row>
    </Wrapper>
  );
}

export default App;
