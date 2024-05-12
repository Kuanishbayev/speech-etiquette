import { LuCalendar } from "react-icons/lu"


const BlogCard = ({id, image, title, body, uploadedDate, children}) => {
  return (
    <div className="border border-transparent lg:hover:border-gray-400 group/item relative lg:max-w-[30%]">
      <div className="img">
        <img className='object-contain w-full' src={image} alt="thumbnail" />
      </div>
      <div className="content">
        <p className='font-bold pb-6 pt-2 md:text-xl lg:text-lg line-clamp-3'>{title}</p>
        <div className='line-clamp-5' />
        <p className='lg:pt-2 flex items-center gap-2 justify-end text-gray-500'><LuCalendar />{uploadedDate.split('T')[0].replaceAll('-', '.').split('.').reverse().join('.')}</p>
      </div>

      {children}
    </div>
  )
}

export default BlogCard