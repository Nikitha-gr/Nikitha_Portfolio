import React, { useState } from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/"><img className={styles.logo} src="../../../assets/logo.png" /></a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "../../../assets/closeBtn.png" : "../../../assets/menuBtn.png"}
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
                        <a href="">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}