import React from 'react'
import NavBar from './NavBar'
import {motion} from "framer-motion"


function CamLinkPage() {

    const boxVarient = {
      hidden: {
        x:"-10vw",
        scale:0.2
      },
      visible: {
        x: 0,
        scale :1
        ,transition :{
          duration: 1,
          ease: "easeInOut",
        }
      }
    }
  return (
    <div className='flex gap-40'>

      <div>
      <NavBar />
      </div>
      <motion.div 
      variants ={boxVarient}
      animate="visible"
      initial="hidden"
      className='flex flex-col gap-[5rem] justify-center font-serif'>
      <motion.div

       className=' text-white felx flex-col bg-cyan-800 bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl'>
        
      <label htmlFor='input-link' className=' p-2 text-3xl font-bold'>Join a connection and contribute your camera</label>
      <div className='pt-[1.5rem] pl-[2rem]'>
        <input id ='input-link'className='rounded-full bg-teal-200 h-[3rem] w-[28rem]'type ="text" placeholder='  Link code'/>
        <motion.button
        whileHover={{scale: 1.2 }}
        whileTap={{scale:100, backgroundColor: "blue"}}
         className='bg-green-600 rounded-md ml-[2rem] h-[2.5rem] w-[6rem] text-lg'>link</motion.button>
      </div>
      </motion.div>
      <div className=' text-white felx flex-col gap-[2rem] bg-cyan-800 bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl'>
        <h1 className='p-2 text-3xl font-bold'>Start a link to connect and manage cameras</h1>
        <button className='bg-green-600 text-xl text-gray-900 rounded-full mt-[1.5rem] ml-[15rem] h-[3rem] w-[10rem]'>Start a link</button>
      </div>
    </motion.div>
    </div>
  ) 
}

export default CamLinkPage
