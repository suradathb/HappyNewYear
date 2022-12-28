import React from "react";
import logo from './logo.svg';
import './App.css';
import NewYearRaffle from "./NewYearReffle";
import Header from "./Header";
import Footer from "./Footer";




function App() {
  return (
    <div className="App">
      <Header/>
        <NewYearRaffle/>
      <Footer/>
    </div>
  );
}

export default App;
