interface ThemeToggleProps {
    theme: "light" | "dark";
    onToggle: () => void;
}

function ThemeToggle ({ theme, onToggle}: ThemeToggleProps) {
    return (
        <button onClick={onToggle} style ={{ marginRight: "1rem", padding: "0.5rem"}} >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}
export default ThemeToggle;