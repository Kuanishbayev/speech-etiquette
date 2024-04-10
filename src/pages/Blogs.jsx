import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard'
import { Pagination } from "@mui/material";

const Blogs = () => {
    const [data, setData]  = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => {
      setData(json.posts);
      setPageQty(Math.ceil(data.length / itemsPerPage));
    });
  })

  useEffect(() => {
    setData(data);
  }, [currentPage]);
  return (
    <div className='max-w-[1280px] mx-auto px-4 lg:px-0 py-12 flex flex-col gap-4 lg:flex-row lg:justify-center lg:flex-wrap'>
        {
            data && data.slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage).map((item, i) => (
                <BlogCard key={i} id={item.id} title={item.title} body={item.body} />
          ))
        }
        <div className="flex justify-center pt-4">
            <Pagination count={pageQty} onChange={(_, num) => setCurrentPage(num)} showFirstButton showLastButton />
        </div>
    </div>
  )
}

export default Blogs