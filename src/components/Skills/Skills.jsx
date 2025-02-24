import React from "react";
import { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import HTML_logo from "../../assets/HTML_logo.png";
import CSS_logo from "../../assets/CSS_logo.png";
import JavaScript_logo from "../../assets/JavaScript_logo.png";
import React_logo from "../../assets/React_logo.png";

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, []);

    return (
        <section className={`${styles.container} ${isVisible ? styles.fadeIn : ""}`}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.content}>
                {[ 
                    { img: HTML_logo, name: "HTML" }, 
                    { img: CSS_logo, name: "CSS" }, 
                    { img: JavaScript_logo, name: "JavaScript" }, 
                    { img: React_logo, name: "React" }
                ].map((skill, index) => (
                    <div key={index} className={styles.skill} style={{ animationDelay: `${index * 200}ms` }}>
                        <div className={styles.imgDiv}>
                            <img src={skill.img} alt={`${skill.name} Logo`} className={styles.logoImg} />
                        </div>
                        <p className={styles.description}>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
