import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="skills">

      </section>
      <section id="projects">
        
      </section>
      <section id="contact">
        
      </section>
    </div>
  )

}

export default App
