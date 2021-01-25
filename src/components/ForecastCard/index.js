import React from "react";
import Card from "../Card";
import "./style.css";

function ForecastCard(props) {
    return (
        <div className="col d-flex align-items-stretch">
            <Card>
                <div className="card-body forecastCard">
                    <h5>{props.date}</h5>
                    <img src={props.iconURL} alt="fiveDayWeatherIcon" />
                    <p className="lead">Temp: {props.temp} &deg;F</p>
                    <p className="lead">Humidity: {props.humidity}%</p>
                </div>
            </Card>
        </div>
    );
}

export default ForecastCard;