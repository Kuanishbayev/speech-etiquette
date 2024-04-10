import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Admin from "./pages/Admin"
import Post from "./pages/Post"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App