import { useState } from "react"
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
    const [hamburger, setHamburger] = useState(true)
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
  return (
    <nav className={color ? 'py-5 sticky top-0 ease-in duration-300 bg-slate-50 z-10' : 'py-5 sticky top-0 z-10 ease-in duration-300'}>
        <div className='max-w-[1280px] mx-auto flex justify-between items-center px-4 lg:px-0'>
            <div className="logo">
                <img src="./se.png" className="w-10" alt="logo" />
            </div>
            <ul className='hidden lg:flex gap-12 font-bold'>
                <li className="border-b border-black">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
                <li>
                    <a href="#statistics">Statistics</a>
                </li>
            </ul>
            <IoMenu size={30} className="lg:hidden" />
        </div>
    </nav>
  )
}

export default Navbar