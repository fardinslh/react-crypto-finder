import "./input.css";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin/:id" element={<CoinDetails />} />
    </Routes>
  );
}

export default App;
