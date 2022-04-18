import React from "react"
import Row from "./components/row"
import NavBar from './components/navbar'
import Banner from "./components/banner"
import './App.css'
import CATEGORIES from "./assets/api/constants"


function App() {
  return (
   <div className="app">
     {/* Add Nav here */}
     <NavBar />
     <Banner />

     <Row title="NETFLIX ORIGINALS" fetchURL = {CATEGORIES.NetflixOriginals} isLargeRow/>
     <Row title="Trending Now" fetchURL = {CATEGORIES.Trending} />
     <Row title="Top Rated Movies" fetchURL = {CATEGORIES.TopRated} />
     <Row title="Action Movies" fetchURL = {CATEGORIES.Action} />
     <Row title="Comedy Movies" fetchURL = {CATEGORIES.Comedy} />
     <Row title="Horror Movies" fetchURL = {CATEGORIES.Horror} />
     <Row title="Romance Movies" fetchURL = {CATEGORIES.Romance} />
     <Row title="Documentaries" fetchURL = {CATEGORIES.Documentary} />
    </div>
  );
}

export default App;
