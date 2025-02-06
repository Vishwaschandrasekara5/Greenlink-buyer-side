import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContainerDashboard from "./container-dashboard";
import Page from "./page";

const Contact: React.FC = () => <h1>Contact Page</h1>;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/container-dashboard" element={<ContainerDashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
