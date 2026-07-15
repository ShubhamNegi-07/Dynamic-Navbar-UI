import {useState, useEffect} from 'react'
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        const handleResize = () => {
            if(window.innerwidth>=768){
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    },[]);

  return (
    <header classname='m-top-80 bg-red-700 shadow-md'>
     <div className='max-w-7xl bg-black  mx-auto px-5 rounded-full'>
      <div className='h-20 flex justify-between items-center'>

      {/*logo*/}
      <img src={Logo} alt="Logo" className="w-15 h-15 object-cover rounded-full"/>

      {/*desktop navlinks*/}
      <nav className='hidden md:flex gap-8'>
        <a href="/" className='text-gray-700 hover:text-blue-600'>Work</a>
        <a href="/about" className='text-gray-700 hover:text-blue-600'>About</a>
        <a href="/playground" className='text-gray-700 hover:text-blue-600'>Playground</a>
        <a href="/resource" className='text-gray-700 hover:text-blue-600'>Resource</a>
      </nav>

      {/* button */}
      <button className='hidden md:block bg-white hover:bg-blue-500 text-black px-6 py-2 rounded-full cursor-pointer'>
        Login
      </button>

       {/* Hamburger menu */}

       <button className='text-white md:hidden text-3xl' onClick={()=>setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰" }
       </button>
      </div>

      {/*Mobile menu*/}
      {isOpen && (
        <div className='md:hidden bg-white border-t'>
            <a href="/" className='block px-6 py-4 hover:bg-gray-100'>Work</a>
            <a href="/about" className='block px-6 py-4 hover:bg-gray-100'>About</a>
            <a href="/playground" className='block px-6 py-4 hover:bg-gray-100'>Playground</a>
            <a href="/resource" className='block px-6 py-4 hover:bg-gray-100'>Resource</a>
            <button className='md:hidden md:block bg-white w-full mb-4 hover:bg-blue-500 text-black px-6 py-2 rounded-full cursor-pointer'>
                Login
            </button>
        </div>
      )}
     </div>
    </header>

  )
}

export default Navbar