import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import HogList from "./HogList";
import HogDetails from "./HogDetails";
import "./style.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HogList />} />
          <Route path="/hog/:name" element={<HogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
