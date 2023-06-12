import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import CreateCampaign from "./pages/CreateCampaign";
import AllCampaigns from "./pages/AllCampaigns";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCampaigns />}></Route>
        <Route index element={<AllCampaigns />}></Route>
        <Route path="/create" element={<CreateCampaign />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
