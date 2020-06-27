import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Router } from "@reach/router";
import DetailCard from "./components/DetailCard";
import NotFound from "./components/notfound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home path="/" />
          <DetailCard path="details/:trackId" />
          <NotFound default />
        </Router>
      </header>
    </div>
  );
}

export default App;
