import React from 'react';
import {useState} from 'react'
import styles from "./BackgroundRemover.module.scss"
import logo from "../../logo (1).svg"
import Screenshot from "../../Screenshot 2022-01-06 at 1.04 2 (1).svg" 
import ellipse from '../../Ellipse 126.svg'
// import Dropzone from '../../utils/Dropzone';
export const BackgroundRemover = () => {
  const [buttonName,setButtonName] = useState("Upload Image")

  const selectImageFile = (event) => {
    if (!event.target.files[0].type.includes("image")) {
        setButtonName("Upload Image")
        return console.log("File format must be .jpg, .png, .jpeg");
    } else if (event.target.files[0].size > 4999999) {
        setButtonName("Upload Image")
        return console.log("File size should be less than 5MB");
    }
    setButtonName(event.target.value.substring(12))
  };

  return <div>
        <img src={logo} className={styles.logo} alt="logo" />
       <div className={styles.leftArea}>
           <h1 className={styles.heading}>Remove image background</h1>
           <h1 className={styles.secondaryText}>100% automatic and free</h1>
           <img src={Screenshot} className={styles.screenshot} alt="No Preview" />
       </div>
       <div className={styles.uploadBox}>
            <div className={styles.image}>
                <img className={styles.greyArea} src={ellipse} alt="No preview" />
            </div>
            <h1 className={styles.secText}>File should be png, jpg and less than 5mb</h1>
            <button className={styles.button}>uploaded image</button>
              <button className={styles.button}>
                  <h1 className={styles.buttonText}>{buttonName}</h1>
                  <input type="file" className={styles.input} accept=".jpg , .jpeg, .png"  onInput={(event) => selectImageFile(event)} />
              </button> 
            {/* </div> */}
            <h1 className={styles.drop}>Or drop a file</h1>
       </div>
  </div>
};


export default BackgroundRemover;