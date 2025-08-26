

interface WeatherCarddProps {
city: string;
temperature: number;
humidity: number;
wind: number;
}

function WeatherCard({ city, temperature, humidity, wind}: WeatherCarddProps) {
    return (
        <div 
        style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            maxWidth: "300px"
        }}
        >
        <h3>{city}</h3>
        <p> Temperature: {temperature} C</p>
        <p> Humidity: {humidity}%</p>
        <p> Wind Speed: {wind} km/h</p>
        </div>
    );
}
export default WeatherCard;