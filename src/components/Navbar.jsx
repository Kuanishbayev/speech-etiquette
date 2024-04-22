import { useEffect, useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import { Link, useLocation } from "react-router-dom"
import logoImg from '../assets/logo/se.png'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [color, setColor] = useState(false)


    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    
    window.addEventListener('scroll', changeColor)

    let location = useLocation()
    useEffect(() => {
        if (location != '/') setColor(true)
    })
  return (
    <nav className={color ? 'backdrop-blur-3xl sticky py-5 top-0 ease-in duration-300 bg-slate-50/30 z-10' : 'sticky py-5 top-0 z-10 ease-in duration-300'}>
        <div className='max-w-[1280px] mx-auto flex justify-between items-center px-4 lg:px-0'>
            <div className="logo">
                <Link to='/'>
                    <img src={logoImg} className="w-10" alt="logo" />
                </Link>
            </div>
            <ul className={location.pathname != '/' ? 'hidden' : 'hidden lg:flex gap-12 font-bold'}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#blogs">Blogs</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
                <li>
                    <a href="#statistics">Statistics</a>
                </li>
            </ul>
            <div className={location.pathname != '/' ? 'hidden' : 'lg:hidden'} onClick={() => setMenu(prev => !prev)}>
                {menu ? <IoClose size={30} /> : <IoMenu size={30} />}
            </div>
            <ul className={menu ? 'backdrop-blur ease-in-out duration-200 font-bold flex flex-col gap-4 items-center justify-center py-10 absolute top-full right-0 bg-sky-500/70 w-full' : 'hidden'} onClick={() => setMenu(false)}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#blogs">Blogs</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
                <li>
                    <a href="#statistics">Statistics</a>
                </li>
            </ul>
            </div>
    </nav>
  )
}

export default Navbar