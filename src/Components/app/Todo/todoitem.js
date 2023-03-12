import React, { useCallback, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import UpdatedTaskModal from '../update-task-modal'
import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import axios from 'axios'
import { deleteTodo } from '../../../redux/todo-slice'

export default function TodoItem({ todo }) {
  const navigate = useNavigate()
  const { title, status, subtasks, description, id } = todo
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const deleteItem = () => {
    dispatch(deleteTodo({ id }))
  }

  const openModal = () => {
    setIsOpen(true)
  }
  const close = () => {
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
      <UpdatedTaskModal todo={todo} isOpen={isOpen} isClose={close} />



    </div>

  )
}





