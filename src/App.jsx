import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Parallax from "./components/parallax/Parallax"

import Contact from "./components/contact/Contact"

import TechStack from "./components/techStack/TechStack"
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Banner />
      </section>
      
      <section id="Portfolio">
        <Parallax type="portfolio" />
        </section>
      <section id="Stack">
        <TechStack />
      </section>


        
        <section id="Contact">
          <Contact />
        </section>

    </div>

  )
}

export default App
