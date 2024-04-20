import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { RiDashboard3Line } from 'react-icons/ri'
import { IoNewspaperOutline } from 'react-icons/io5'
import { GoTrash } from 'react-icons/go'
import { ImExit } from 'react-icons/im'
import { useEffect } from 'react'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  useEffect(() => {
    location.pathname === '/admin' && navigate('blogs-manager')
  }, [location])
  
  return (
    <aside className='sticky top-0 h-screen bg-blue-900 min-w-64 p-4 flex flex-col gap-4'>
      <div className='flex items-center gap-2 text-white p-2'>
        <RiDashboard3Line size={40} />
        <span className='text-xl font-bold'>Dashboard</span>
      </div>

      <nav className='grow flex flex-col justify-between'>
        <ul className='flex flex-col gap-4'>
          <li>
            <NavLink to='admins' className='flex items-center gap-2 text-white hover:bg-gray-500 rounded-lg p-2'>
              <MdOutlineAdminPanelSettings size={30} />
              <span className='font-bold'>Admins</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='blogs-manager' className='flex items-center gap-2 text-white hover:bg-gray-500 rounded-lg p-2'>
              <IoNewspaperOutline size={25} />
              <span className='font-bold'>Blogs</span>
            </NavLink>
          </li>
        </ul>

        <ul className='flex flex-col gap-4'>
          <li>
            <NavLink to='trash' className='flex items-center gap-2 text-white hover:bg-gray-500 rounded-lg p-2'>
              <GoTrash size={25} />
              <span className='font-bold'>Trash</span>
              <span className='size-6 border-2 border-white text-sm flex justify-center items-center font-bold boder-white bg-red-500 rounded-full'>6</span>
            </NavLink>
          </li>
          <li>
            <button onClick={logout} className='w-full flex items-center gap-2 text-white hover:bg-gray-500 rounded-lg p-2'>
              <ImExit size={25} />
              <span className='font-bold'>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar