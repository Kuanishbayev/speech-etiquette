import { EmblaCarousel } from './EmblaCarousel'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {
  return (
    <div>
        <div className='max-w-[1280px] h-full mx-auto grid grid-cols-2 items-center'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-7xl'>Speech Etiquette</h1>
            <p className='pb-4'>The Public Speaking app is designed for all users who want to learn and practice English in order to speak fluently with people The application is Public speaking for beginners and advanced level students. You may have English speaking skills, but these English language skills will not help you when you want to speak in front of people. That's why you need to learn how to speak publicly, and you need to acquire public speaking skills. This public speaking app has revealed your inner fear of public speaking through many practical public speaking exercises</p>
            <Button size='large' className='self-start' variant="contained" endIcon={<DownloadIcon />}>
              Download our app
            </Button>
          </div>
          <EmblaCarousel />
        </div>
    </div>
  )
}

export default Hero