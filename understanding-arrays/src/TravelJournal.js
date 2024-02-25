import React from "react";
import './TravelJournal.css'

export default function TravelJournal(props) {
    return (
        <div className="main-box">
            <div className="travel-item">
                <div className="image-container">
                    <img src={props.item.image_URL} alt={props.item.title} />
                </div>
                <div className="details-container">
                    <h3>Place: {props.item.title}</h3>
                    <h3>Location: {props.item.location}</h3>
                    <a href={props.item.google_wiki_link}>For more info about {props.item.title}, click here</a>
                    <p>Trip Start Date: {props.item.start_date}</p>
                    <p>Trip End Date: {props.item.end_date}</p>
                    <p>Description: {props.item.description}</p>
                </div>
            </div>
        </div>
    )
}