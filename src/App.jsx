import React, {useState, createContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/Routing';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import {useEffect} from 'react';




export const ThemeContext = createContext()

function App() {

  const savedTheme = localStorage.getItem('theme') || 'light' ;

  const[theme, setThemes] = useState(savedTheme)
  
  useEffect(()=> {
     localStorage.setItem('theme', theme);
  },[theme])


  const toggleTheme = ()=> {
    setThemes(theme === 'dark' ? 'light' : 'dark'  )
  }

  return (
    <BrowserRouter>

    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
      <div className='app flex flex-col justify-between h-[]' id={theme}>
            <Header />
            <Routing />
            <Footer />
      </div>
    </ThemeContext.Provider >
    </BrowserRouter>
  );
}

export default App;