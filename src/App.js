import { Route, Routes } from "react-router";
import "./App.css";
import PortfolioProvider from "./context/PortfolioProvider";
import Home from "./pages/Home";

function App() {
  return (
    <PortfolioProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PortfolioProvider>
  );
}

export default App;
