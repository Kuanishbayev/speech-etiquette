import { useState } from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialNetworks = () => {
    const [isdark, setDark] = useState(true)
    const changeLogoColor = () => {
        if (window.scrollY >= 170 && window.scrollY <= 900) {
            setDark(false)
        } else {
            setDark(true)
        }
    }
    window.addEventListener('scroll', changeLogoColor)
  return (
    <div className='fixed right-10 top-1/2 -translate-y-1/2'>
        <ul className='flex flex-col gap-4'>
            <li>
                <a href="#">
                    <FaFacebook size={25} className={isdark ? 'ease-in-out duration-300' : 'fill-[#4267B2] ease-in-out duration-100'} />
                </a>
            </li>
            <li>
                <a href="#">
                    <FaTwitter size={25} className={isdark ? 'ease-in-out duration-300' : 'fill-[#1DA1F2] ease-in-out duration-100'} />
                </a>
            </li>
            <li>
                <a href="#">
                    <FaYoutube size={25} className={isdark ? 'ease-in-out duration-300' : 'fill-[#FF0000] ease-in-out duration-100'} />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialNetworks