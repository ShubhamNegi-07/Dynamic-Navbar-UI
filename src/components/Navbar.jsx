import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {name: "Work", path: "/"},
        {name: "About", path: "/about"},
        {name: "Playground", path: "/playground"},
        {name: "Resource", path: "/resource"}
    ];

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
     <div className='w-full bg-gray-900 text-white mx-auto px-3 rounded-3xl'>
      <div className='h-20 flex justify-between items-center'>

      {/*logo*/}
      <NavLink to="/">
      <img src={Logo} alt="Logo" className="w-15 h-15 object-cover rounded-full"/>
      </NavLink>

      {/*Desktop Menu*/}
      <nav className='hidden md:flex gap-20'>

        {navItems.map((item)=>(
            <NavLink
                key={item.path}
                to={item.path}
                className={({isActive})=>
                `relative font-medium transition-all duration-300 cursor-pointer
                ${
                    isActive ? "text-blue-600"
                    : "hover:text-blue-600"
                }
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:bg-blue-600
                after:transition-all
                after:duration-300
                ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }

                `}


            >{item.name}</NavLink>
        ))}

        
      </nav>

      {/*Login button */}
      <button className='font-medium hidden md:block w-35 bg-white hover:bg-blue-500 text-black px-6 py-2 rounded-full cursor-pointer'>
        Login
      </button>

       {/* Hamburger menu */}

       <button className='md:hidden text-3xl' onClick={()=>setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰" }
       </button>
      </div>

      {/*Mobile menu*/}
      {isOpen && (
        <div className='md:hidden text-white border-t'>
            {navItems.map((item)=>(
            <NavLink
                key={item.path}
                to={item.path}
                onClick={()=>setIsOpen(false)}
                className={({isActive})=>`block px-6 py-4 transition-all duration-300 cursor-pointer
                ${
                    isActive ? "text-blue-600":"hover:bg-gray-700 hover:text-blue-600 mb-4"

                }
                `}
            >{item.name}</NavLink>
        ))}
            <button className="font-medium w-full bg-blue-600 mb-4 py-3 rounded-lg cursor-pointer">
                Login
            </button>
        </div>
      )}
     </div>
    </header>

  )
}

export default Navbar