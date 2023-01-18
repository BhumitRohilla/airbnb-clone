import React from "react";
import styles from "./card.module.css";
import PropType from 'prop-types'
export default function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.imgsrc} alt="" />
      <div className={styles.rating}>
        ⭐{props.stars}
        <span className={styles.gray}>({props.noReview})•{props.country}</span>
      </div>
      <div>{props.title}</div>
      <div>From ${props.price} / person</div>
    </div>
  );
}
Card.PropType={
    stars: PropType.number,
    title: PropType.string,
    price: PropType.number.isRequired,
    noReview: PropType.number.isRequired,
    country: PropType.string.isRequired,
    imgsrc: PropType.string.isRequired
}
