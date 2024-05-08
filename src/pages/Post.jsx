import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const [data, setData]  = useState(null);
    let {id} = useParams()
    useEffect(() => {
        fetch('https://uteshova-zernegul.uz/api/blog/' + id)
        .then(res => res.json())
        .then(json => setData(json.blog));
      }, [])
  return (
    <div className='max-w-[768px] mx-auto p-4 lg:p-0 lg:py-12'>
        <div className='w-full border'>
            <img src={data && data.image} alt="thumbnail" className='w-full' />
        </div>
        <p className='font-bold pt-4 md:text-xl lg:text-3xl'>{data && data.title}</p>
        <div dangerouslySetInnerHTML={{__html:data && data.body}} />
    </div>
  )
}

export default Post