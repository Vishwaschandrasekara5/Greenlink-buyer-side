import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContainerDashboard from "./container-dashboard";
import Page from "./page";
import Order from "./order"



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/container-dashboard" element={<ContainerDashboard />} /> 
        <Route path="/order" element={<Order />} /> 
      </Routes>
    </Router>
  );
};

export default App;
