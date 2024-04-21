import { IoClose } from 'react-icons/io5'

const Modal = ({ open, onClose, children }) => {
  return (
    <div className={`fixed top-0 left-0 flex justify-center items-center w-full h-full transition-colors ${open ? "visible bg-black/50" : "invisible"}`}>
        <div className={`md:w-96 bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <button onClick={onClose} className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
                <IoClose />
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal