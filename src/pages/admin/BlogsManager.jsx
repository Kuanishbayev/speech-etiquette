import { Pagination } from '@mui/material';
import { useEffect, useRef, useState } from 'react'
import BlogCard from '../../components/admin/BlogCard';
import { Link, Outlet } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import Modal from '../../components/admin/Modal';
import { IoTrashOutline } from 'react-icons/io5';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast'

const BlogsManager = () => {
  const [open, setOpen] = useState(false)
  const [data, setData]  = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 3;
  const [search, setSearch] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => {
      setData(json.posts);
    });
  }, [])
  
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value)
    setCurrentPage(1)
  }

  useEffect(() => {
    setPageQty(Math.ceil(data.filter(item => search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)).length / itemsPerPage))
  }, [search, data]);

  return (
    <div className='grow pt-12'>
      <div className='max-w-[90%] mx-auto'>
        <div className='flex justify-between items-center lg:items-stretch mb-10'>
          <form className='flex gap-2' onSubmit={handleSearch}>
            <input ref={inputRef} className='border border-gray-300 rounded-md p-2.5' type="text" placeholder='Search blogs' />
            <button className='hidden lg:block bg-blue-100 p-4 rounded-md'><CiSearch /></button>
          </form>
          <Link to='create-post' className='size-10 lg:size-auto bg-green-500 text-white rounded-lg shadow-md font-bold flex justify-center items-center'>
            <span className='hidden lg:inline lg:px-4 lg:py-2'>Create +</span>
            <span className='lg:hidden text-xl'>+</span>
          </Link>
        </div>
        <div className='lg:flex gap-4 justify-evenly'>
          {
            data && data.filter(item => search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage).map((item, i) => (
              <BlogCard key={i} id={item.id} title={item.title} body={item.body}>
                <div className="hidden group-hover/item:flex absolute top-2 right-2 gap-2">
                  <button className="bg-white p-2 rounded-md shadow-md" title='Edit'>
                    <MdModeEdit />
                  </button>
                  <button className="bg-white p-2 rounded-md shadow-md" onClick={() => setOpen(true)}>
                    <MdDelete />
                  </button>
                </div>
              </BlogCard>
            ))
          }
        </div>
        <div className="flex justify-center pt-4">
          <Pagination count={pageQty} onChange={(_, num) => setCurrentPage(num)} showFirstButton showLastButton />
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className='text-center w-56'>
            <IoTrashOutline size={56} className='mx-auto text-red-500' />
            <div className='mx-auto my-4 w-48'>
              <h3 className='text-lg font-black text-gray-800'>Confirm Delete</h3>
              <p className='text-sm text-gray-500'>
                Are you sure you want to delete this item?
              </p>
            </div>
            <div className='flex gap-4'>
              <button className='font-bold py-2 rounded-md text-white shadow-md bg-red-500 w-full' onClick={() => toast.success('It is a toast.')}>Delete</button>
              <button className='font-bold py-2 rounded-md text-stone-400 shadow-md w-full' onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>
        </Modal>

        <Toaster />
      </div>
    </div>
  )
}

export default BlogsManager