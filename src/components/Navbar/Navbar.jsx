import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png"
import closeBtn from "../../assets/closeBtn.png"
import menuBtn from "../../assets/menuBtn.png"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
        setMenuOpen(false);
    }

    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src={logo} />
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? closeBtn : menuBtn}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a onClick={()=> scrollToSection("hero")}>Home</a>
                    </li>
                    <li>
                        <a onClick={()=> scrollToSection("about")}>About</a>
                    </li>
                    <li>
                        <a onClick={()=> scrollToSection("skills")}>Skills</a>
                    </li>
                    <li>
                        <a onClick={()=> scrollToSection("projects")}>Projects</a>
                    </li>
                    <li>
                        <a onClick={()=> scrollToSection("contact")}>Contact</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1kYwmmIYcY7SxI9TxJaEHCAcV5O7lwGAO/view?usp=sharing" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}