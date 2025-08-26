import {Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ padding: "1rem", background: "#282c34", color: "white"}}>
            <h2> Weatherly</h2>
            <nav>
                <Link to= "/settings" style={{color: "white"}}>
                    Settings
                </Link>
            </nav>
        </header>
    );
}

export default Header;