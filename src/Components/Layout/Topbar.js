import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { openModal } from '../../redux/modal-slice'
import { FiMenu } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
const Topbar = ({openHandlerNav,isOpenNav}) => {
    const location=useLocation()
    const dispatch=useDispatch()
    return (
        <div className={`w-full h-24 dark:bg-[#2c2c38] bg-gray-200
        ${isOpenNav?'pl-[180px] md:pl-[270px] ':'pl-4px'} 
         flex justify-between items-center	 shadow fixed`}>
            <div className=' flex items-center justify-center pl-4'>
                <FiMenu onClick={openHandlerNav} className=' cursor-pointer text-2xl dark:text-gray-300 mr-3'/>
                <p className=' font-bold dark:text-gray-300  text-xl md:text-2xl'>
                    Platform Launch
                </p>
            </div>
           {
               location.pathname==="/"&&(
                <div className=' flex items-center justify-center pr-8'>
                <button onClick={()=>{dispatch(openModal())}} className=' hidden md:block bg-[#645fc6] text-white font-bold shadow-sm rounded-3xl px-4 py-2'>
                    + Add New Task
                </button>
                <button onClick={()=>{dispatch(openModal())}} className=' md:hidden bg-[#645fc6] text-white font-bold shadow-sm rounded-xl px-2 py-1'>
                    +
                </button>
            </div>
               )
           }
        </div>
    )
}

export default Topbar