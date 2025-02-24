import React from "react";
import styles from "./Projects.module.css";
import Seara_Project from "../../assets/Seara_Project.png";

export const Projects = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projectCard}>
                <h2 className={styles.projectTitle}>Seara</h2>
                <p className={styles.description}>
                    Seara is a responsive web application designed for seamless navigation across all devices,
                    including desktop 🖥️, tablet 📱, and mobile 📲. The project includes a product showcase 🛍️,
                    a newsletter subscription form 📬, a cart feature 🛒, and categorized sections for products under $50 💵,
                    under $100 💰, and for kids 🧸.
                </p>

                <div className={styles.content}>
                    <img src={Seara_Project} alt="Seara Project Homepage" className={styles.projectImg} />
                </div>

                {/* Skills Section */}
                <ul className={styles.skills}>
                    <li className={styles.skill}>HTML</li>
                    <li className={styles.skill}>CSS</li>
                    <li className={styles.skill}>JavaScript</li>
                </ul>

                <div className={styles.links}>
                    <a href="https://nikitha-gr.github.io/Seara/" className={styles.link} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                    <a href="https://github.com/Nikitha-gr/Seara.git" className={styles.link} target="_blank" rel="noopener noreferrer">
                        Source
                    </a>
                </div>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};