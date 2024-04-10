import { useEffect, useState } from 'react'
import { FaArrowRight, FaCircleDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'

const Blogs = () => {
  const [data, setData]  = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => setData(json.posts));
  }, [])
  return (
    <div id='blogs' className='max-w-[1280px] mx-auto px-4 lg:px-0 py-12'>
      <ul className='flex justify-between mb-4'>
        <li className='font-bold text-xl flex items-center gap-2'><FaCircleDot className='fill-indigo-700' />Blogs</li>
        <li className='hover:text-blue-600'>
          <Link to='/blogs' className='flex items-center gap-2'>
            <span>Hammesi</span><FaArrowRight />
          </Link>
        </li>
      </ul>
      <div className='flex flex-col gap-4 lg:flex-row lg:justify-center'>
        {
          data && data.slice(0, 3).map((item, i) => (
            <BlogCard key={i} title={item.title} body={item.body} />
          ))
        }
      </div>
    </div>
  )
}

export default Blogs