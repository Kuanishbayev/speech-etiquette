import { Pagination } from '@mui/material'
import { CiSearch } from 'react-icons/ci'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import Modal from '../../components/admin/Modal'
import { useEffect, useRef, useState } from 'react'
import DataNotFoundImg from '../../assets/data-not-found.jpg'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet'

const Admins = () => {
  const [open, setOpen] = useState(false);
  const [data, setData]  = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 6;
  const [search, setSearch] = useState('')
  const inputRef = useRef()
  const [loading, setLoading] = useState(true)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=10')
    .then(res => res.json())
    .then(json => {
      setData(json.users);
      setLoading(false)
    });
  }, [])
  
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value.toLowerCase())
    setCurrentPage(1)
  }

  useEffect(() => {
    setPageQty(Math.ceil(data.filter(item => search === '' ? item : item.firstName.toLowerCase().includes(search)).length / itemsPerPage))
  }, [search, data]);

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='grow pt-12'>
      <Helmet>
        <title>Admins</title>
      </Helmet>
      <div className='max-w-[90%] mx-auto'>
        <div className='flex justify-between items-center lg:items-stretch mb-10'>
          <form className='flex gap-2' onSubmit={handleSearch}>
            <input ref={inputRef} className='border border-gray-300 rounded-md p-2.5' type="text" placeholder='Search admins' />
            <button className='hidden lg:block bg-blue-100 p-4 rounded-md'><CiSearch /></button>
          </form>
          <button onClick={() => setOpen(true)} className='size-10 lg:size-auto bg-green-500 text-white rounded-lg shadow-md font-bold'>
            <span className='hidden lg:inline lg:px-4 lg:py-2'>Add a new admin</span>
            <span className='lg:hidden text-xl'>+</span>
            </button>
        </div>
          <ul className='flex flex-col gap-4'>
            {loading && (
              Array(itemsPerPage).fill(0).map((item, index) => (
                <li key={index} className='animate-pulse shadow px-4 py-6 flex items-center bg-gray-300 rounded-md'>
                  <div className='flex gap-4'>
                    <p className='h-4 w-16 md:w-20 bg-gray-400 rounded-full'></p>
                    <p className='h-4 w-24 md:w-40 bg-gray-400 rounded-full'></p>
                  </div>
                </li>
              ))
            )}
            {
              data && data.filter(item => search === '' ? item : (item.firstName + item.lastName).toLowerCase().includes(search)).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage).map((item, i) => (
                <li key={item.id} className='lg:hover:bg-green-200 group/item shadow p-4 flex justify-between items-center bg-green-300 rounded-md'>
                  <div className='flex gap-4 font-bold'>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                  </div>
                  <div className="lg:invisible lg:group-hover/item:visible flex gap-2">
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
            {!loading && (data.filter(item => search === '' ? item : (item.firstName + item.lastName).toLowerCase().includes(search)).length === 0 && <img src={DataNotFoundImg} alt="data-not-found" />)}
          </ul>
        <div className="flex justify-center mt-10 mb-20">
        <Pagination count={pageQty} onChange={(_, num) => setCurrentPage(num)} showFirstButton showLastButton />
          </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form className='space-y-4 md:w-96' onSubmit={handleSubmit(onSubmit)}>
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
            <input {...register('password1', {minLength: {value: 8, message: "Password must have at least 8 characters!"}})} type="password" id='password1' name='password1' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' min='8' required />
          </div>
          <div>
            <label htmlFor="password2" className='block mb-2 text-sm font-medium text-gray-900'>Confirm password</label>
            <input
              {...register('password2', {
                validate: (value) => {
                  if (value !== watch('password1')) {
                    return 'Passwords did not match.'
                  }
                }
              })}
              type="password"
              id='password2'
              name='password2'
              className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full'
              required />
          </div>
          {errors.password1 && <div className='text-red-600'>{errors.password1.message}</div>}
          {errors.password2 && <div className='text-red-600'>{errors.password2.message}</div>}
          <div className='flex justify-end'>
            <button className='mr-0 font-bold py-2 px-8 mx-auto rounded-md text-white shadow-md bg-green-500'>Add</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Admins