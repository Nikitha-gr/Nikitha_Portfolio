import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.content}>
                <p className={styles.description}>
                    I am a Frontend Developer who enjoys building dynamic and responsive web applications
                    using React.js, JavaScript, and modern web technologies. I love writing clean,
                    efficient code and continuously exploring new ways to imporove functionality and user interaction.
                </p>
                <p className={styles.description}>
                    Before transitioning into frontend development, I worked in the tech industry, which helped me develop
                    strong problem-solving skills and attention to detail.My background in Electronics and Communication Engineering
                    has given me a solid analytical foundation, helping me approach development logically and efficiently.
                </p>
                <p className={styles.description}>
                    Currently, I'm Upskilling through Masai, working on real-world projects that push me to enhance my
                    coding abilities and learn new technologies. I enjoy collaborating with teams, tackling challenges,
                    and constantly evolving in the fast-paced world of web development
                </p>
            </div>
            <div className={styles.topBlur} />
        </section>
    )
}