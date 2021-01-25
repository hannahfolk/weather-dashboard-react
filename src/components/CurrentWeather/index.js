import React from "react";
import Card from "../Card";
import "./style.css";

function CurrentWeather(props) {
    return (
        <Card>
            <div className="card-body currentWeatherCard">
                <h2>{props.cityName} ({props.currentDate}) <img src={props.iconURL} alt="currentWeatherIcon"/></h2>
                <p className="lead">Temperature: {props.temp} &deg;F</p>
                <p className="lead">Humidity: {props.humidity}%</p>
                <p className="lead">Wind Speed: {props.windSpeed} MPH</p>
                <p className="lead">UV Index: {<span style={props.uviStyle}>{props.uvi}</span>}</p>
            </div>
        </Card>
    );
}

export default CurrentWeather;