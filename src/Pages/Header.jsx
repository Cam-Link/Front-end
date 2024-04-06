import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Themes from './Themes';
import { ThemeContext } from '../App';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { themes } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 600) {
        setMenuOpen(false); // Close the menu when resizing to larger screen sizes
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='text-center p-5 flex justify-between'>
      <div>
        <Link to='/'>
          <img className='h-[2rem] w-[12rem] hover:scale-110 duration-300  ' src="./Images/camlink.png" alt="" />
        </Link>
      </div>
      <div className='flex space-x-4 text-[1.2rem]'>
        <div>
          <Themes />
        </div>
        {/* Media query to show/hide menu based on screen size */}
        {windowWidth <= 600 && (
          <div className="relative">
            <button onClick={toggleMenu} className="focus:outline-none">
              {themes ? (
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
            {/* Menu items */}
            {menuOpen && (
              <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded shadow-lg mt-2">
                <Link to='/About' onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About us</Link>
                <Link to='/SignUp' onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</Link>
                <Link to='/LogIn' onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">LogIn</Link>
              </div>
            )}
          </div>
        )}
        {/* Normal menu items for larger screens */}
        {windowWidth > 600 && (
          <>
            <Link to='/About'>
              <div>
                <h1 className='hover:scale-110 duration-300'>About us</h1>
              </div>
            </Link>
            <Link to='/SignUp'>
              <div>
                <h1 className='hover:scale-110 duration-300'>Sign Up</h1>
              </div>
            </Link>
            <Link to='/LogIn'>
              <div>
                <h1 className='hover:scale-110 duration-300'>LogIn</h1>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
