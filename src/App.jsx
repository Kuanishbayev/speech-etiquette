import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SocialNetworks from "./components/SocialNetworks"
import Statistics from "./components/Statistics"

function App() {
  return (
    <>
      <Navbar />
      <SocialNetworks />
      <Hero />
      <AboutMe />
      <Contact />
      <Statistics />
    </>
  )
}

export default App