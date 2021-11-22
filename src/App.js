import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginUseReducer from "./components/LoginUseReducer";
import LoginUseState from "./components/LoginUseState";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usestate" element={<LoginUseState />} />
        <Route path="/usereducer" element={<LoginUseReducer />} />
      </Routes>
    </Router>
  );
}

export default App;
