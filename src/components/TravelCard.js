import React from "react";

export default function TravelCard(props){
    return(
        <article className="travel-card">
            <img className="travel-card--image" src={props.city.imageURL} />
            <div className="travel-card--text">
                <span className="travel-card--country">{props.city.country}</span>
                <a className="travel-card--google-maps-link" href={props.city.linkGoogleMaps}>View on Google Maps</a>
                <div className="travel-card--title">{props.city.title}</div>
                <div className="travel-card--dates">{props.city.startDate.toLocaleDateString()} - 
                    {props.city.endDate.toLocaleDateString()}</div>
                <div className="travel-card--description">{props.city.description}</div>
            </div>
        </article>
    )
}