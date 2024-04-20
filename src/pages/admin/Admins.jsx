import { Pagination } from '@mui/material'
import { CiSearch } from 'react-icons/ci'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import Modal from '../../components/admin/Modal'
import { useEffect, useRef, useState } from 'react'

const Admins = () => {
  const [open, setOpen] = useState(false);
  const [data, setData]  = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 6;
  const [search, setSearch] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=10')
    .then(res => res.json())
    .then(json => {
      setData(json.users);
    });
  }, [])
  
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value)
    setCurrentPage(1)
  }

  useEffect(() => {
    setPageQty(Math.ceil(data.filter(item => search.toLowerCase() === '' ? item : item.firstName.toLowerCase().includes(search)).length / itemsPerPage))
  }, [search, data]);

  return (
    <div className='grow pt-12'>
      <div className='max-w-[90%] mx-auto'>
        <div className='flex justify-between mb-10'>
          <form className='flex gap-2'>
            <input ref={inputRef} className='border border-gray-300 rounded-md p-2.5' type="text" placeholder='Search admins' />
            <button onClick={handleSearch} className='bg-blue-100 p-4 rounded-md'><CiSearch /></button>
          </form>
          <button onClick={() => setOpen(true)} className='bg-green-500 text-white px-4 py-2 rounded-lg shadow-md font-bold flex items-center'>Add a new admin</button>
        </div>
          <ul className='flex flex-col gap-4'>
            {
              data && data.filter(item => search.toLowerCase() === '' ? item : (item.firstName + item.lastName).toLowerCase().includes(search)).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage).map((item, i) => (
                <li key={item.id} className='hover:bg-green-200 group/item shadow p-4 flex justify-between items-center bg-green-300 rounded-md'>
                  <div className='flex gap-4 font-bold'>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                  </div>
                  <div className="invisible group-hover/item:visible flex gap-2">
                    <button className="bg-white p-2 rounded-md shadow-md" title='Edit'>
                      <MdModeEdit />
                    </button>
                    <button className="bg-white p-2 rounded-md shadow-md">
                      <MdDelete />
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        <div className="flex justify-center mt-10">
        <Pagination count={pageQty} onChange={(_, num) => setCurrentPage(num)} showFirstButton showLastButton />
          </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form className='w-96 space-y-4'>
          <div>
            <label htmlFor="first_name" className='block mb-2 text-sm font-medium text-gray-900'>First Name</label>
            <input type="text" id='first_name' name='first_name' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' required />
          </div>
          <div>
            <label htmlFor="last_name" className='block mb-2 text-sm font-medium text-gray-900'>Last Name</label>
            <input type="text" id='last_name' name='last_name' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' required />
          </div>
          <div>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
            <input type="email" id='email' name='email' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' required />
          </div>
          <div>
            <label htmlFor="password1" className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
            <input type="password" id='password1' name='password1' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' required />
          </div>
          <div>
            <label htmlFor="password2" className='block mb-2 text-sm font-medium text-gray-900'>Confirm password</label>
            <input type="password" id='password2' name='password2' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' required />
          </div>
          <div className='flex justify-end'>
            <button className='mr-0 font-bold py-2 px-8 mx-auto rounded-md text-white shadow-md bg-green-500'>Add</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Admins