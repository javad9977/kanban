import React , {useState , Fragment, useEffect} from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useSelector } from 'react-redux'
import { Transition } from '@headlessui/react'
const Layout = ({children}) => {
  const [darkMode , setDarkMode]=useState(true)
  const [isOpenNav, setIsOpenNav] = useState(true)
  const [isMobileSize, setIsMobileSize] = useState(false)

  function handleResize(){
    // eslint-disable-next-line no-restricted-globals
    if(innerWidth <= 640){
      setIsMobileSize(true)
      setIsOpenNav(false)

    }else{
      setIsMobileSize(false)
      setIsOpenNav(true)
    }
  }

  useEffect(()=>{
      if(typeof window != undefined){
        // eslint-disable-next-line no-restricted-globals
        addEventListener("resize",handleResize)
      }

      return ()=>{
        // eslint-disable-next-line no-restricted-globals
        removeEventListener("resize",handleResize)
      }
  },[])
console.log(isMobileSize)
  function enableDarkMode() {
    setDarkMode(true)
}
function disableDarkMode() {
  setDarkMode(false)
}
function hideNavBar(){
  setIsOpenNav(false)
}
function openHandlerNav(){
  setIsOpenNav(!isOpenNav)
}
    const modalstate=useSelector((state)=>state.modal)
  return (
    <div className={`${darkMode?"dark":'' } `}>
            <Topbar  
              openHandlerNav={openHandlerNav} isOpenNav={isOpenNav} 
              darkMode/>
           
              <Sidebar 
              isOpenNav={isOpenNav} setIsOpenNav={hideNavBar}
              darkMode={darkMode} enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode}/>
        <main 
        
        className={` 
        ${isOpenNav?'pl-56':'pl-4px'} z-[99]
        dark:bg-[#21212d] min-h-screen duration-[400ms] transition-all  pt-28 text-white
          bg-[#f4f7ff]
        `}>
            <div className=' px-4 md:px-16'>
                {children}
            </div>
        </main>
       
    </div>
  )
}

export default Layout