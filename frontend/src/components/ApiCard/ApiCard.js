import React from 'react'
import styles from "./ApiCard.module.scss"
import Screenshot from "../../Screenshot 2022-01-06 at 1.04 2 (1).svg"  

export const ApiCard = () => {
    return (
        <div className={styles.apiCard}>
            <img src={Screenshot} className={styles.screenshot} alt="logo" />
            <h1 className={styles.heading}>Background Remove</h1>
            <p className={styles.text}>The descriptipn of the API in quick brief and we will truncate it here...</p>
        </div>
    )
}


export default ApiCard;