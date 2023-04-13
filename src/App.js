import React from "react";
import TravelCard from "./components/TravelCard";
import NavBar from "./components/NavBar";
import data from "./data/cities.js"

export default function App() {
    const cards = data.map( city => 
        <TravelCard key={city.id} city={city} />);
    return (
        <div className="container">
            <NavBar />
            <section className="travel-card-list">
                {cards}
            </section>
        </div>
    )
}