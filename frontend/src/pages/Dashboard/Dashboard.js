import React from 'react'
import styles from "./Dashboard.module.scss"
import logo from "../../logo (1).svg"
import Screenshot from "../../Screenshot 2022-01-06 at 1.04 2 (1).svg"  
import Card from "../../components/ApiCard/ApiCard.js";


export const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />
                <button className={styles.loginButton}>Login/Signup</button>
            </div>
            <div className={styles.body}>
                <div className={styles.topCard}>
                    <img src={Screenshot} className={styles.topCardPhoto} alt="No Preview" />
                    <div className={styles.semiCircle}></div>
                    <div className={styles.textDiv}>
                        <h1 className={styles.topText}>BACKGROUND IMAGE REMOVER</h1>
                        <h1 className={styles.bottomText}>100% automatic and free</h1>
                    </div>
                    <button className={styles.viewButton}>View App</button>
                </div>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}


export default Dashboard;