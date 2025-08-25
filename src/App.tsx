import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Header from "./components/Header";

function App() {
  return (
    <Router>
    <Header />
    <main style={{ padding: "1rem" }}>
    <Routes>
    <Route path="/" element={<Home /> } />
    </Routes></main>
    </Router>
  );
}

export default App;