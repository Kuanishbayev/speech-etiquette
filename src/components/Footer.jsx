const Footer = () => {
  return (
    <footer className="bg-stone-800 flex justify-center py-24 text-stone-300">
        <div className="flex flex-col items-center gap-4">
            <img src="./se.png" alt="logo" className="w-20" />
            <p>&copy; 2024</p>
            <p>Разработчик сайта: <span className="font-bold"><a href="#">IMAX Company</a></span></p>
        </div>
    </footer>
  )
}

export default Footer