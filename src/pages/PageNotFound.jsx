import { Helmet } from 'react-helmet'
import PageNotFoundImg from '../assets/404.svg'

const PageNotFound = () => {
  return (
    <>
      <Helmet>
          <title>Page not found</title>
      </Helmet>
      <img className='w-3/4 lg:w-1/2 mx-auto' src={PageNotFoundImg} alt="404" />
    </>
  )
}

export default PageNotFound