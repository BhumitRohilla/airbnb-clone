import React from "react";
import "./card.css";
import PropType from "prop-types";
export default function Card(props) {
  let holder = null;
  if (props.item.available === false) {
    holder = "SOLD OUT";
  } else if (props.item.location === "Online") {
    holder = "Online";
  }
  return (
    <div className="card">
      {holder && <div className="status">{holder}</div>}
      <img
        className="img"
        src={process.env.PUBLIC_URL + `/${props.item.coverImg}`}
        alt=""
      />
      <div className="rating">
        ⭐{props.item.stats.rating}
        <span className="gray">
          ({props.item.stats.reviewCount})•{props.item.location}
        </span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
Card.PropType = {
  stars: PropType.string,
  title: PropType.string,
  price: PropType.number.isRequired,
  noReview: PropType.number.isRequired,
  country: PropType.string.isRequired,
  imgsrc: PropType.string.isRequired,
};
