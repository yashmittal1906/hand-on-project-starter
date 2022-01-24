import React from 'react'
import {useState} from 'react'
import styles from "./Login.module.scss"
import image from "../../stroke.svg"
import logo from "../../logo (1).svg"
import axios from 'axios'


export const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signinHandler = async () => {
        try {
            const data = {
                email,
                password
            }
            const response = await axios.post("http://localhost:5000/auth/login",data);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className={styles.login}>
            <img className={styles.logo} src={logo} alt="NO preview"></img>
            <div className={styles.welcome}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt="No preview"></img>
                </div>
                <h1 className={styles.message}>Welcome to your Dashboard</h1>  
                <p className={styles.smallMessage}>Your uploaded APIs will be displayed here once you login to your account</p>
            </div>
            {/* <div className={styles.loginContainer}> */}
                 <h1 className={styles.heading}>Login to your account</h1>
                 <input className={styles.email} placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                 <input className={styles.password} placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                 <button className={styles.button} onClick={signinHandler}>Login/Signup</button>
            {/* </div> */}
        </div>
    )
}

export default Login;
