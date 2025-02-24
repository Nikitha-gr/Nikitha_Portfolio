import React from "react";
import styles from "./Contact.module.css";
import Email_logo from "../../assets/Email_logo.png";
import LinkedIn_logo from "../../assets/LinkedIn_logo.png";
import Github_logo from "../../assets/Github_logo.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={Email_logo} alt="Email icon" />
          <a href="mailto:nikitha14.gr@gmail.com" target="_blank">nikitha14.gr@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={LinkedIn_logo}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nikitha-gopalakrishna/" target="_blank">nikitha-gopalakrishna</a>
        </li>
        <li className={styles.link}>
          <img src={Github_logo} alt="Github icon" />
          <a href="https://github.com/Nikitha-gr" target="_blank">github.com/Nikitha-gr</a>
        </li>
      </ul>
    </footer>
  );
};