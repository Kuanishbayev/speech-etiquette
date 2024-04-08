import { FaLocationDot } from 'react-icons/fa6'
import { ImPhone } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <div id='contact' className='bg-cyan-700'>
        <div className='max-w-[1280px] h-full mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-12 py-12 px-4 lg:px-0'>
            <div className='flex flex-col items-center lg:items-start gap-6 lg:gap-12 lg:w-1/2'>
                <div>
                    <h1 className='text-center lg:text-start font-bold text-4xl text-white'>Contact Us</h1>
                    <p className='text-center lg:text-start pt-6 text-cyan-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, commodi temporibus vitae maxime ducimus laboriosam non vel fugit sequi tempora!</p>
                </div>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center gap-2 text-cyan-100'><ImPhone className='fill-teal-300' /><span>+ (123) 456 7890</span></li>
                <li className='flex items-center gap-2 text-cyan-100'><IoIosMail className='fill-teal-300' /><span>contact@xyzwebsite.com</span></li>
                <li className='flex items-center gap-2 text-cyan-100'><FaLocationDot className='fill-teal-300' /><span>11, Street 342, Abcd Fgh</span></li>
            </ul>
            </div>
            <form className='flex flex-col bg-white p-10 gap-4 text-gray-600 rounded-lg max-w-lg'>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input className='mt-2 ring-1 ring-gray-300 px-4 py-2 outline-none rounded-md w-full p-2 focus:ring-2 focus:ring-teal-300' placeholder='Your name' type="text" id='name' required />
                </div>
                <div>
                    <label htmlFor="email">Email Adress</label>
                    <input className='mt-2 ring-1 ring-gray-300 px-4 py-2 outline-none rounded-md w-full p-2 focus:ring-2 focus:ring-teal-300' placeholder='Email Adress' type="email" id='email' required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea className='mt-2 ring-1 ring-gray-300 px-4 py-2 outline-none rounded-md w-full p-2 focus:ring-2 focus:ring-teal-300' placeholder='Type your message here' id="message" cols="30" rows="5" required></textarea>
                </div>
                <Button className='bg-cyan-700 self-end' variant="contained" endIcon={<SendIcon />}>Send</Button>
            </form>
        </div>
    </div>
  )
}

export default Contact