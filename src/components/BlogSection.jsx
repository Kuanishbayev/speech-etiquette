import { useEffect, useState } from 'react'
import { FaArrowRight, FaCircleDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'

const Blogs = () => {
  const [data, setData]  = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://speech.orfo-qareken.uz/api/blogs/active')
    .then(res => res.json())
    .then(json => {
      setData(json.data.news)
      setLoading(false)
    });
  }, [])
  return (

    <div id='blogs' className='max-w-[1280px] mx-auto px-4 lg:px-0 py-12'>
      <ul className='flex justify-between mb-4'>
        <li className='font-bold text-xl flex items-center gap-2'><FaCircleDot className='fill-indigo-700' />Blogs</li>
        <li className='hover:text-blue-600'>
          <Link to='blogs' className='flex items-center gap-2'>
            <span>All</span><FaArrowRight />
          </Link>
        </li>
      </ul>
      <div className='grid lg:grid-cols-2 gap-4'>
        {loading && (
            <div className='animate-pulse bg-gray-300'>
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
          )}
        {
          data && data.slice(0, 1).map((item, i) => (
            <BlogCard key={i} id={item.id} image={item.image} title={item.title} body={item.body} />
          ))
        }
        <div className='grid lg:grid-cols-2 grid-rows-2 gap-4'>
        {loading && (
            Array(4).fill(0).map((item, index) => (
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
            data && data.slice(1, 5).map((item, i) => (
              <BlogCard key={i} id={item.id} image={item.image} title={item.title} />
            ))
          }
        </div>
      
        
      </div>
    </div>
  )
}

export default Blogs