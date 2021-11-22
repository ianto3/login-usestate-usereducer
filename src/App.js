import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginUseState from "./components/LoginUseState";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usestate" element={<LoginUseState />} />
      </Routes>
    </Router>
  );
}

export default App;
