import styles from "./Skills.module.css";
import HTML_logo from "../../assets/HTML_logo.png";
import CSS_logo from "../../assets/CSS_logo.png";
import JavaScript_logo from "../../assets/JavaScript_logo.png";
import React_logo from "../../assets/React_logo.png";

export const Skills = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.content}>
                <div className={styles.skill}>
                    <div className={styles.imgDiv}>
                        <img src={HTML_logo} alt="HTML Logo" className={styles.logoImg} />
                    </div>
                    <p className={styles.description}>HTML</p>
                </div>
                <div className={styles.skill}>
                    <div className={styles.imgDiv}>
                        <img src={CSS_logo} alt="CSS Logo" className={styles.logoImg} />
                    </div>
                    <p className={styles.description}>CSS</p>
                </div>
                <div className={styles.skill}>
                    <div className={styles.imgDiv}>
                        <img src={JavaScript_logo} alt="JavaScript Logo" className={styles.logoImg} />
                    </div>
                    <p className={styles.description}>JavaScript</p>
                </div>
                <div className={styles.skill}>
                    <div className={styles.imgDiv}>
                        <img src={React_logo} alt="React Logo" className={styles.logoImg} />
                    </div>
                    <p className={styles.description}>React</p>
                </div>
            </div>
        </section>
    )
}