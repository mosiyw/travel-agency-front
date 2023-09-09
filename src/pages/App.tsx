import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/App.css';
import Home from './Home';
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
