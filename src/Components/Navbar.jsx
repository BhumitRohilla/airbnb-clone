import React from 'react';
import styles from './navbar.module.css'
export default function Navbar(){
    return (
        <div className={styles.mainBody}>
            <img className={styles.img} src={process.env.PUBLIC_URL + "/airbnb 1.png"} alt="" />
        </div>
    )
}