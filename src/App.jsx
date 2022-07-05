import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import calculator from "./components/calculator";
import home from "./components/home";
import quote from "./components/quote";
import header from "./components/header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="quote" element={<quote />} />
          <Route path="calculator" element={<calculator />} />
        </Routes>
      </>
    );
  }
}

export default App;
