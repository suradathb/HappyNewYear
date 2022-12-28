import React from "react";
import logo from './logo.svg';
import './App.css';
import NewYearRaffle from "./NewYearReffle";
import NewYearUI from "./NewYearUI";
import Header from "./Header";
import Footer from "./Footer";
import NewYearCountdown from "./NewYearCountdown";


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
