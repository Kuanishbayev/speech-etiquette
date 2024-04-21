import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const [data, setData]  = useState([]);
    let {id} = useParams()
    useEffect(() => {
        fetch('https://dummyjson.com/posts/' + id)
        .then(res => res.json())
        .then(setData);
      })
  return (
    <div className='max-w-[768px] mx-auto p-4 lg:p-0 lg:py-12'>
        <div className='w-full border'>
            <img src={`https://picsum.photos/300/200?random=${id}`} alt="thumbnail" className='w-full' />
        </div>
        <p className='font-bold pt-4 md:text-xl lg:text-3xl'>{data.title}</p>
        <p className='md:text-lg lg:text-xl pt-2'>{data.body}</p>
    </div>
  )
}

export default Post