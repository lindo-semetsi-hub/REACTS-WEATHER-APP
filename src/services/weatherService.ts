import axios from "axios";
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL } from "../config";

export interface WeatherData {
    city: string;
    temperature: number;
    humidity: number;
    wind: number;
}

export const fetchWeatherBycity = async (city: string): Promise<WeatherData>=> {
    const url = `${OPEN_WEATHER_BASE_URL}/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}$units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    return {
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed
    };
};