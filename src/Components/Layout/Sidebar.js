import React, { useState } from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { TfiShine } from 'react-icons/tfi'
import { FaRegListAlt } from 'react-icons/fa'
import { BiHide } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { Link , useLocation} from 'react-router-dom'
const Sidebar = ({ showNavHandler , enableDarkMode,isOpenNav,
    setIsOpenNav,
    disableDarkMode,darkMode}) => {
        const location=useLocation()
    return (
       
                <div className={`
                w-34 md:w-64 h-full bg-gray-200 dark:bg-[#2c2c38]	
                ${isOpenNav?' translate-x-0':' -translate-x-full'} ease-in-out duration-300
                shadow fixed  flex flex-col justify-between
                `}>
                    <div>
                        <div className=' px-4 h-24 font-bold  py-6 dark:text-white  text-4xl '>
                            Kanban
                        </div>
                        <div className=' px-4 py-4'>
                            <p className=' dark:text-gray-400  font-bold'>
                                All borders (2)
                            </p>
                        </div>
                        <div className={` 
                         px-4 py-3 gap-2 dark:text-gray-200 flex items-center ${location.pathname==='/'?'bg-[#645fc6] text-gray-200 rounded-r-full mr-4':''}
                        `}>
                        <FaRegListAlt/>
                        <Link to="/">
                                Platform Launch
                            </Link>
        
                        </div>
                        <div className={`
                        ${location.pathname==='/charts'?'bg-[#645fc6] rounded-r-full mr-4 text-gray-200':''}
                        px-4 py-3 gap-2 dark:text-gray-200  flex items-center`}>
                            <FaRegListAlt/>
                            
                            <Link to="/charts">
                                Chart Todo
                            </Link>
        
                        </div>
                      
                        <div className=' px-4 py-3 gap-2 text-[#645fc6] flex items-center'>
                        <FaRegListAlt/>
        
                            <p>
                                + Create New Board
                            </p>
        
                        </div>
                    </div>
                    <div className=' w-full'>
                        <div className='  dark:bg-black bg-slate-500 w-48 mx-auto  px-6 py-2 text-white rounded-md shadow-sm '>
                            <div className=' flex mx-auto justify-center gap-12'>
                                <TfiShine
                                onClick={disableDarkMode}
                                className=' text-xl text-gray-300' />
                              
                                <BsMoonStarsFill
                                onClick={enableDarkMode}
                                className=' text-gray-300' />
                            </div>
                        </div>
        
        
                        <div className=' px-8 py-4 dark:text-gray-300 flex items-center justify-start 
        
                        cursor-pointer
                        gap-4'
                        onClick={setIsOpenNav}
                        >
                            <BiHide className="ml-2"/>
                            <p className=' text-sm dark:text-gray-300'>Hide SideBar</p>
        
                        </div>
                    </div>
        
                </div>
                 
    )
}
export default Sidebar