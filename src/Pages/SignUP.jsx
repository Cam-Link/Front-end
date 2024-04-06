import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='app flex justify-evenly items-center h-[72vh]'>
      <div className={`w-[20rem] h-[37rem] flex flex-col text-start justify-center items-center bg-blue-700 bg-opacity-40 rounded-lg ${isSmallScreen ? 'flex-col' : 'flex-row'}`}>
        <h1 className='font-bold text-2xl text-red pb-4 text-center'>Sign Up</h1>
        <div className=''>
          <h3 className='p-1'>First Name</h3>
          <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="text" placeholder='Enter Your First Name' />
          <h3 className='p-1'>Last Name</h3>
          <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="text" placeholder='Enter Your Last Name' />
          <h3 className='p-1'>Email Address</h3>
          <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="text" placeholder='Enter Your Email Address' />
          <h3 className='p-1'>Password</h3>
          <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="Password" placeholder='Enter your Password' />
          <h3 className='p-1'>Confirm Password</h3>
          <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="Password" placeholder='Enter again your Password' />
        </div>
        <button className='bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-1 w-[10rem] mt-2 font-serif text-xl hover:scale-110 duration-300'>Create</button>
        {isSmallScreen && (
          <div className='w-[20rem] h-[25rem] flex flex-col text-start justify-center rounded-lg sm:w-[30rem] sm:h-[35rem] sm:text-lg' style={{ backgroundColor: 'rgb(36, 32, 32)', backdropFilter: 'opacity(65%)' }}>
            <h1 className='text-3xl w-[11ch]' style={{ fontFamily: 'monoton', letterSpacing: '0.1em' }}>LINKING CAMERAS FOR A BETTER VIEW</h1>
          </div>
        )}
      </div>
      {!isSmallScreen && (
        <div>
          <h1 className='text-4xl w-[11ch]' style={{ fontFamily: 'monoton', letterSpacing: '0.1em' }}>LINKING CAMERAS FOR A BETTER VIEW</h1>
        </div>
      )}
    </div>
  );
}

export default SignUpPage;
