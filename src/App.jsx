import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Parallax from "./components/parallax/Parallax"
import Contact from "./components/contact/Contact"
import TechStack from "./components/techStack/TechStack"
import Projects from "./components/services/Projects"

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Banner />
      </section>
      <section>
        <Parallax type="services" />
        </section>
      <section id="Projects">
        <Projects />
      </section>
      <section >
        <Parallax type="portfolio" />
        </section>
      <section id="Stacks">
        <TechStack />
      </section>


        
        <section id="Contact">
          <Contact />
        </section>

    </div>

  )
}

export default App
