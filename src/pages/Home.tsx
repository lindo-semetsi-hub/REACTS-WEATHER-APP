import {useState} from "react";
import SearchBar from "../components/Searchbar";
import WeatherCard from "../components/WeatherCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { fetchWeatherBycity, type WeatherData } from "../services/weatherService";


function Home() {
    const [weathers, setWeathers] = useLocalStorage<WeatherData[]>("weathers", []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (city: string) => {
        setLoading(true);
        setError("");
        try {
            const weather = await fetchWeatherBycity(city);
            setWeathers([...weathers, weather]);
        } catch {
            setError("City not found or API error");
        }finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Weather Dashboard</h2>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p> }
            {error && <p style={{ color: "red" }}>{error}</p>}
            {weathers.map((w, index) => (
                 <WeatherCard
                 key={index}
                 city={w.city}
                 temperature={w.temperature}
                 humidity={w.humidity}
                 wind={w.wind}
                 />
            ))}
               
        </div>
    );
}
export default Home;