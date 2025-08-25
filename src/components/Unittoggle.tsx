interface UnittoggleProps {
    unit: "C" | "F";
    onToggle: () => void;
}

function UnitToggle ({ unit, onToggle }: UnittoggleProps) {
    return (
        <button onClick={onToggle} style={{ padding: "0.5rem"}}>
            {unit === "C" ? "Switch to F" : "Switch to C"}
        </button>
    )
}
export default UnitToggle;