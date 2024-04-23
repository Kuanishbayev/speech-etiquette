import { LuCalendar } from "react-icons/lu"


const BlogCard = ({id, title, body, children}) => {
  return (
    <div className="lg:hover:bg-gray-100 hover:opacity-80 group/item relative lg:max-w-[30%]">
      <div className="img">
        <img className='object-contain w-full' src={`https://picsum.photos/300/200?random=${id}`} alt="thumbnail" />
      </div>
      <div className="content">
        <p className='font-bold pb-6 pt-2 md:text-xl lg:text-lg line-clamp-3'>{title}</p>
        <p className='line-clamp-5'>{body}</p>
        <p className='lg:pt-2 flex items-center gap-2 justify-end text-gray-500'><LuCalendar />02.04.2024</p>
      </div>

      {children}
    </div>
  )
}

export default BlogCard