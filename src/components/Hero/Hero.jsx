import React from "react";
import styles from "./Hero.module.css"
import Nikitha_Photo from "../../assets/Nikitha_Photo.jpeg"
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Nikitha G R</h1>
                <p className={styles.description}>A Front-end Developer passionate about building responsive and user-friendly websites. Always eager to learn and improve my skills </p>
                <a href="mailto:nikitha14.gr@gmail.com" className={styles.contactBtn} target="_blank">Contact Me</a>
            </div>
            <img src={Nikitha_Photo} alt="Photo of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}