import { useEffect, useRef, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { Pagination } from "@mui/material"
import DataNotFoundImg from '../assets/data-not-found.jpg'
import { url } from '../utils/Url'

const Blogs = () => {
  const [data, setData]  = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 6;
  const [search, setSearch] = useState('')
  const inputRef = useRef()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${url}/api/blogs/active?per_page=1000`)
    .then(res => res.json())
    .then(json => {
      setData(json.data.news)
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
    <div className='max-w-[1280px] mx-auto px-4 lg:px-0 py-12'>
      <form className='mb-10 flex justify-center' onSubmit={handleSearch}>
          <input className='w-full lg:w-1/2 shadow border p-4 border-gray-300 rounded-lg' type="search" placeholder='Search blogs' ref={inputRef} />
      </form>
      <div className='grid lg:grid-cols-3 gap-3'>
        {loading && (
          Array(itemsPerPage).fill(0).map((item, index) => (
            <div key={index} className='animate-pulse bg-gray-300'>
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
            <BlogCard key={i} id={item.id} image={item.image} title={item.title} body={item.body} date={item.uploadedDate} />
          ))
        }
        {!loading && (data.filter(item => search === '' ? item : item.title.toLowerCase().includes(search)).length === 0 && <img src={DataNotFoundImg} alt="data-not-found" />)}
      </div>
      <div className="flex justify-center pt-4">
          <Pagination count={pageQty} onChange={(_, num) => setCurrentPage(num)} showFirstButton showLastButton />
      </div>
    </div>
  )
}

export default Blogs