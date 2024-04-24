import { Pagination } from '@mui/material';
import { useEffect, useRef, useState } from 'react'
import BlogCard from '../../components/admin/BlogCard';
import { CiSearch } from 'react-icons/ci';
import Modal from '../../components/admin/Modal';
import { IoTrashOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { GrUndo } from 'react-icons/gr';
import toast, { Toaster } from 'react-hot-toast';
import DataNotFoundImg from '../../assets/data-not-found.jpg'
import { Helmet } from 'react-helmet';

const Trash = () => {
  const [open, setOpen] = useState(false)
  const [data, setData]  = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 3;
  const [search, setSearch] = useState('')
  const inputRef = useRef()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/posts?delay=2000')
    .then(res => res.json())
    .then(json => {
      setData(json.posts)
      setLoading(false)
    });
  }, [])
  
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value.toLowerCase())
    setCurrentPage(1)
  }

  useEffect(() => {
    setPageQty(Math.ceil(data.filter(item => search === '' ? item : item.title.toLowerCase().includes(search)).length / itemsPerPage))
  }, [search, data]);

  return (
    <div className='grow pt-12'>
      <Helmet>
        <title>Trash</title>
      </Helmet>
      <div className='max-w-[90%] mx-auto'>
        <div className='flex lg:justify-center mb-10'>
          <form className='flex gap-2 w-full lg:w-1/2'>
            <input ref={inputRef} className='border border-gray-300 rounded-md p-2.5 w-full' type="text" placeholder='Search in trash' />
            <button onClick={handleSearch} className='hidden lg:block bg-blue-100 p-4 rounded-md'><CiSearch /></button>
          </form>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 lg:justify-between'>
          {loading && (
            Array(itemsPerPage).fill(0).map((item, index) => (
              <div key={index} className='animate-pulse lg:w-[30%] bg-gray-300'>
                <div className="h-60 bg-gray-400"></div>
                <div className='mt-4 flex flex-col gap-2 p-4'>
                  <p className='h-6 mb-6 bg-gray-400 rounded-full'></p>
                  <p className='h-4 bg-gray-400 rounded-full'></p>
                  <p className='h-4 bg-gray-400 rounded-full'></p>
                  <p className='h-4 bg-gray-400 rounded-full'></p>
                  <p className='h-4 bg-gray-400 rounded-full'></p>
                  <p className='h-4 bg-gray-400 rounded-full'></p>
                  <p className='h-4 bg-gray-400 self-end w-1/2 rounded-full'></p>
                </div>
              </div>
            ))
          )}
          {
            data && data.filter(item => search === '' ? item : item.title.toLowerCase().includes(search)).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage).map((item, i) => (
              <BlogCard key={i} id={item.id} title={item.title} body={item.body}>
                <div className="lg:hidden lg:group-hover/item:flex flex absolute top-2 md:top-4 lg:top-2 right-2 md:right-4 lg:right-2 gap-2 md:gap-4 lg:gap-2">
                  <button className="bg-white p-2 rounded-md shadow-md" title='Return'>
                    <GrUndo className='size-5 md:size-10 lg:size-fit' />
                  </button>
                  <button className="bg-white p-2 rounded-md shadow-md" onClick={() => setOpen(true)}>
                    <MdDelete className='size-5 md:size-10 lg:size-fit' />
                  </button>
                </div>
              </BlogCard>
            ))
          }
          {!loading && (data.filter(item => search === '' ? item : item.title.toLowerCase().includes(search)).length === 0 && <img src={DataNotFoundImg} alt="data-not-found" />)}
        </div>
        <div className="flex justify-center pt-4 mb-20">
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

export default Trash