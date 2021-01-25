import axios from "axios";

const apikey = "572d14321ae6789e9c768be6fb36520d";

export default {
    // Get current weather for given city
    getCurrentWeather: city => {
        return axios("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&apikey=" + apikey);
    },
    getForecast: city => {
        return axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&apikey=" + apikey);
    },
    getUVI: (lat, lon) => {
        return axios.get("https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&apikey=" + apikey);
    }
};