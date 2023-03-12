import React, { useState } from 'react'
import {BiTrash} from 'react-icons/bi'
import {FaRegEdit} from 'react-icons/fa'
import { useSelector , useDispatch } from 'react-redux'
import { deleteTodo } from '../../../redux/todo-slice'
import UpdatedTaskModal from '../update-task-modal'
const DoingItem = ({doing}) => {
  const {title,status,subtask1,subtask2,description,id}=doing
  const [isOpen , setIsOpen]=useState(false)
    const dispatch=useDispatch()
    const deleteItem = ()=>{
      dispatch(deleteTodo({id}))
    } 
    const openModal=()=>{
      setIsOpen(true)
    }
    const close=()=>{
      setIsOpen(false)
    }
    return (
      <div className='   bg-white shadow-md dark:bg-[#2c2c38] dark:shadow-none px-8 w-full py-4 rounded-md my-4'>


      <div className=' flex flex-wrap items-center justify-between'>

        <p className=" text-slate-800 dark:text-slate-50  text-lg font-bold">
          {title}
        </p>
        <div className=' flex items-center gap-1'>

          <div className='  '>
            <FaRegEdit onClick={openModal} className=' text-slate-600 dark:text-white cursor-pointer text-lg' />
          </div>
          <div className='   '>
            <BiTrash onClick={deleteItem} className=' text-slate-600 dark:text-white cursor-pointer text-lg' />
          </div>
        </div>
      </div>
      <p className=' text-slate-400 dark:text-gray-400  text-sm'>
        {description}
      </p>
      <UpdatedTaskModal todo={doing} isOpen={isOpen} isClose={close} />



    </div>

  )
}

export default DoingItem