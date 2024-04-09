import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Services from "./components/services/Services"
import TechStack from "./components/techStack/TechStack"
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Banner />
      </section>
      <section id="Services">
        <Parallax type="services" />
        </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
        </section>
      <section>
        <TechStack />
      </section>


        
        <section id="Contact">
          <Contact />
        </section>

    </div>

  )
}

export default App
