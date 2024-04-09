import { motion, useAnimationControls, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import Footer from "./Footer";

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
}
const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(true)

  const containerControls = useAnimationControls()
  const svgControls = useAnimationControls()

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open")
      svgControls.start("open")
    } else {
      containerControls.start("close")
      svgControls.start("close")
    }
  }, [isOpen])

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
    setSelectedProject(null)
  }
  return (
    <motion.nav 
    >
    < motion.div 
    variants={containerVariants}
    animate={containerControls}
    initial="close"
     className={`text-white text-xl p-4 flex flex-col h-[43rem] justify-start items-start  bg-blue-900 w-[15rem] bg-opacity-40  m-1 rounded-lg`}>
      <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
      <div>
      {isOpen ? (
        <div className="flex flex-col gap-[1rem]">
          <Link to="/Home">
            <h1 className="hover:bg-green-200  hover:text-black p-2 rounded-lg w-[12rem]">Home</h1>
          </Link>
          <Link to="/CamLink">
            <h1 className="hover:bg-green-200  hover:text-black p-2 rounded-lg w-[12rem]">CamLink</h1>
          </Link>
          <Link to="/ScreenShare">
            <h1 className="hover:bg-green-200  hover:text-black p-2 rounded-lg w-[12rem]">Screen Share</h1>
          </Link>
          <div className="pt-[20rem] pl-[-1rem]"> <Footer/></div>
        </div>
      ) : (
        <div className="flex flex-col gap-[1rem]">
          <Link to="/Home">
            <motion.div initial = {{ scale:1}}
             whileTap={{ scale: 1.2 }} 
             whileHover={{opacity: 0.4, scale :1.4}}
             ><HomeIcon /></motion.div>
            
          </Link>
          <Link to="/CamLink">
            <motion.div initial = {{ scale:1}} 
            whileTap={{ scale: 1.2 }} 
             whileHover={{opacity: 0.4, scale :1.4}}><LinkedCameraIcon/></motion.div>
          </Link>
          <Link to="/ScreenShare">
            <motion.div initial = {{ scale:1}} 
            whileTap={{ scale: 1.2 }} 
             whileHover={{opacity: 0.4, scale :1.4}}><ScreenshotMonitorIcon/></motion.div>
          </Link>
        </div>
      )}

    </div>
 

    </motion.div>
    </motion.nav>
  )
}

export default NavBar
