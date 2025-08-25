import {useState} from "react";
import SearchBar from "../components/Searchbar";
import WeatherCard from "../components/WeatherCard";

interface Weather {
    city:string;
    temperature: number;
    humidity: number;
    wind: number;
}

function Home() {
    const [weathers, setweathers] = useState<Weather[]>([]);

    const handleSearch = (city: string) => {
// dummy weather
        const dummyWeather: Weather = {
            city,
            temperature: 26,
            humidity: 60,
            wind:10
        };

        setweathers([...weathers, dummyWeather]);
    };
    return (
        <div>
            <h2>Weather Dashboard</h2>
            <SearchBar onSearch={handleSearch} />
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