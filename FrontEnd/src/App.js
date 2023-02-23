import { Route, Routes } from "react-router";
import "./App.css";
import PortfolioProvider from "./context/PortfolioProvider";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills";

function App() {
  return (
    <PortfolioProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </PortfolioProvider>
  );
}

export default App;
