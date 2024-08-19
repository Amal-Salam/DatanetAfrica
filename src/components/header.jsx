
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/logo.jpg'
import { navItems } from "../constants";
import { Link } from 'react-router-dom';

export default function Navbar (){
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
   const scrollToSection = (elementId) => {
     const element = document.getElementById(elementId);
     element.scrollIntoView({ behavior: 'smooth' });
   };
    return (
      <nav className='sticky top-0 z-50 py-3 mx-9 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0'>
              <Link to='/'>
                <img src={logo} alt='logo' className='h-10 w-10 mr-2' />
              </Link>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href='{item.href}'
                  onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.href.slice(1));
                  }}
            >{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='hidden lg:flex justify-center space-x-12 items-center '>
              <Link to='/contact'
                className='bg-gradient-to-r from-blue-200 to-blue-600 py-2 px-2 rounded-md'
              >
                Contact Us
              </Link>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className='fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-right lg:hidden'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-3'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='flex space-x-6'>
              <Link to='/contact'
                className='py-2 px-3 border rounded-md bg-gradient-to-r from-blue-200 to-blue-500'
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
}