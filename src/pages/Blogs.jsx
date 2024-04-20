import { useEffect, useRef, useState } from 'react';
import BlogCard from '../components/BlogCard'
import { Pagination } from "@mui/material";

const Blogs = () => {
  const [search, setSearch] = useState('')
  const inputRef = useRef()
  const [data, setData]  = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 6;

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
    <div className='max-w-[1280px] mx-auto px-4 lg:px-0 py-12'>
      <form className='mb-10 flex justify-center' onSubmit={handleSearch}>
          <input className='w-1/2 shadow border p-4 border-gray-300 rounded-lg' type="search" placeholder='Search blogs' ref={inputRef} />
      </form>
      <div className='flex flex-col gap-4 lg:flex-row lg:justify-center lg:flex-wrap'>
        {
          data && data.filter(item => search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage).map((item, i) => (
            <BlogCard key={i} id={item.id} title={item.title} body={item.body} />
          ))
        }
      </div>
      <div className="flex justify-center pt-4">
          <Pagination count={pageQty} onChange={(_, num) => setCurrentPage(num)} showFirstButton showLastButton />
      </div>
    </div>
  )
}

export default Blogs