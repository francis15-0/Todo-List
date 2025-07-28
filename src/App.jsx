import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const imageSrc = (() => {
    if (theme === 'dark') {
      return isMobile ? '/images/bg-mobile-dark.jpg' : '/images/bg-desktop-dark.jpg';
    } else {
      return isMobile ? '/images/bg-mobile-light.jpg' : '/images/bg-desktop-light.jpg';
    }
  })();


  return (
    <>

      <img src={imageSrc} alt="background" className='image' />
      <Header theme={theme} update={setTheme}/>
      <Form />
      <List />
     
      
      
      

    
     
    </>
  )
}

export default App
