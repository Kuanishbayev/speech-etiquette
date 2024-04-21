import { GoTrash } from "react-icons/go"
import { ImExit } from "react-icons/im"
import { IoNewspaperOutline } from "react-icons/io5"
import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"


const MobileBottomNavbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  return (
    <ul className='lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 p-4 md:py-6 md:px-8 bg-gray-700 rounded-full shadow-md'>
      <li>
        <Link to='admins' className={location.pathname === '/admin/admins' ? 'text-white' : 'text-gray-400'}>
          <MdOutlineAdminPanelSettings className="size-7 md:size-10" />
        </Link>
      </li>
      <li>
        <Link to='/admin' className={location.pathname === '/admin' ? 'text-white' : 'text-gray-400'}>
          <IoNewspaperOutline className="size-7 md:size-10" />
        </Link>
      </li>
      <li>
        <Link to='trash' className={location.pathname === '/admin/trash' ? 'text-white' : 'text-gray-400'}>
          <div className="relative">
            <GoTrash className="size-7 md:size-10" />
            <span className='box-content absolute -top-1 md:-top-2 -right-1 md:-right-2 size-4 md:size-5 text-sm flex justify-center items-center bg-red-500 rounded-full text-white border-2 md:border-4 border-gray-700'>6</span>
          </div>
        </Link>
      </li>
      <li>
        <button onClick={logout} className='block text-gray-400'>
          <ImExit className="size-7 md:size-10" />
        </button>
      </li>
    </ul>
  )
}

export default MobileBottomNavbar