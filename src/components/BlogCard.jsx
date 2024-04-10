import { LuCalendar } from "react-icons/lu"
import { Link } from "react-router-dom"
import thumbnailImg from '../assets/blogs/itBhj90G_dVWFHDW3KBMpiHGzlg6VBml_medium.jpg'


const BlogCard = ({id, title, body}) => {
  return (
    <div className="card lg:max-w-[30%]">
      <Link to={`/post/${id}`}>
        <div className="img">
          <img className='w-full' src={thumbnailImg} alt="thumbnail" />
        </div>
        <div className="content">
          <p className='font-bold pb-6 pt-2 md:text-xl lg:text-lg line-clamp-3'>{title}</p>
          <p className='line-clamp-5'>{body}</p>
          <p className='lg:pt-2 flex items-center gap-2 justify-end text-gray-500'><LuCalendar />02.04.2024</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard