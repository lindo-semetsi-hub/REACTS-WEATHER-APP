import React, { useState} from "react";

interface searchBarProps {
    onSearch: (city: string) => void;
}

function SearchBar({ onSearch }: searchBarProps) {
const [city, setCity] = useState("");

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
};

return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem"}}>
        <input
        type="text"
        placeholder="Enter the City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem"}}></input>
        <button type="submit" style={{ padding: "0.5rem 1rem"}}>
            Search
        </button>
    </form>
);
}

export default SearchBar;