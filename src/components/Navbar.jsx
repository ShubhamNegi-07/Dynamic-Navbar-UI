import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
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
    <header className='m-10'>
     <div className='max-w-7xl bg-black text-white mx-auto px-5 rounded-full'>
      <div className='h-20 flex justify-between items-center'>

      {/*logo*/}
      <img src={Logo} alt="Logo" className="w-15 h-15 object-cover rounded-full"/>

      {/*desktop navlinks*/}
      <nav className='hidden md:flex gap-8'>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/playground">Playground</NavLink>
        <NavLink to="/resource">Resource</NavLink>
      </nav>

      {/* button */}
      <button className='hidden md:block bg-white hover:bg-blue-500 text-black px-6 py-2 rounded-full cursor-pointer'>
        Login
      </button>

       {/* Hamburger menu */}

       <button className='bg-black md:hidden text-3xl' onClick={()=>setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰" }
       </button>
      </div>

      {/*Mobile menu*/}
      {isOpen && (
        <div className='md:hidden text-white border-t'>
            <NavLink to="/" className='block px-6 py-4 hover:bg-gray-100'>Work</NavLink>
            <NavLink to="/about" className='block px-6 py-4 hover:bg-gray-100'>About</NavLink>
            <NavLink to="/playground" className='block px-6 py-4 hover:bg-gray-100'>Playground</NavLink>
            <NavLink to="/resource" className='block px-6 py-4 hover:bg-gray-100'>Resource</NavLink>
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