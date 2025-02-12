import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.png"
import closeBtn from "../../../assets/closeBtn.png"
import menuBtn from "../../../assets/menuBtn.png"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/"><img className={styles.logo} src={logo} /></a>
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
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1dHJMRFRXBQkWZW4WAQ8aQykVTFaVM4Ni/view?usp=drive_link" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}