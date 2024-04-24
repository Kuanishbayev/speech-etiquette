import SocialNetworks from "../components/SocialNetworks"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import BlogSection from "../components/BlogSection"
import Contact from "../components/Contact"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
        <Helmet>
            <title>Speech Etiquette </title>
        </Helmet>
        <SocialNetworks />
        <Hero />
        <AboutMe />
        <BlogSection />
        <Contact />
    </>
  )
}

export default Home