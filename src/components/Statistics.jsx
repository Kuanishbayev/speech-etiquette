import React, { useState } from 'react'
import { CiStar } from 'react-icons/ci'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { SlLike } from 'react-icons/sl'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Statistics = () => {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div id='statistics' className='py-12'>
            <div className='max-w-[1280px] mx-auto flex flex-col gap-12 lg:flex-row lg:justify-evenly'>
                <div className='flex flex-col items-center gap-4'>
                    <IoCloudDownloadOutline size={70} className='stroke-gray-400 hover:stroke-emerald-500 ease duration-200' />
                    <p className='text-5xl font-bold'>
                        {counterOn && <CountUp prefix='+' duration={2} separator='.' end={40000000} />}
                    </p>
                    <p className='text-stone-500 text-xl font-extralight'>ЗАГРУЗОК</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <CiStar size={70} className='fill-gray-400 hover:fill-emerald-500 ease duration-200' />
                    <p className='text-5xl font-bold'>
                        {counterOn && <CountUp prefix='+' duration={2} separator='.' end={295000} />}
                    </p>
                    <p className='text-stone-500 text-xl font-extralight'>ОТЗЫВОВ</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <SlLike size={70} className='fill-gray-400 hover:fill-emerald-500 ease duration-200' />
                    <p className='text-5xl font-bold'>
                        {counterOn && <CountUp prefix='+' duration={2} separator='.' end={50000} />}
                    </p>
                    <p className='text-stone-500 text-xl font-extralight'>ЛАЙКОВ</p>
                </div>
            </div>
        </div>
    </ScrollTrigger>
  )
}

export default Statistics