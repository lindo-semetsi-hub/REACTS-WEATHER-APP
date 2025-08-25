import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import UnitToggle from "../components/UnitToggle";

function Settings() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [unit, setUnit] = useState<"C" | "F">("C");
    
    const toggleTheme = () => {
        setTheme(theme === "light" ?  "dark" : "light");
    };

    const toggleUnit = () => {
        setUnit(unit === "C" ? "F" : "C");
    };

    return (
        <div style={{padding: "1rem"}} >
            <h2> Settings</h2>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <UnitToggle unit={unit} onToggle={toggleUnit} />
            <div style={{ marginTop: "1rem"}}>
                <p>Current Theme: {theme}</p>
                <p>Temperature Unit: {unit}</p>
            </div>
        </div>
    );
}
export default Settings; 