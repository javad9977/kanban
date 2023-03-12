import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import AddNewTaskModal from '../Components/app/add-new-task-modal'
import { useDispatch } from 'react-redux'
import { Transition } from '@headlessui/react'
import { closeModal } from '../redux/modal-slice'
import TodoList from '../Components/app/Todo/todolist'
import { faker } from '@faker-js/faker'
import DoneList from '../Components/app/Done/donelist'
import DoingList from '../Components/app/Doing/doinglist'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import { fetchTodos } from '../redux/todo-slice'
export const Home = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const todos=  useSelector((state)=>state.todo.todos)
   
    const dispatch=useDispatch()
  
    useEffect(()=>{
  
        dispatch(fetchTodos())
   
  },[dispatch])
    const todoLists = useSelector((state)=> state.todo.todos.filter(x=>x.status==="todo"))
    const doingLists = useSelector((state)=> state.todo.todos.filter(x=>x.status==="doing"))
    const doneLists = useSelector((state)=> state.todo.todos.filter(x=>x.status==="done"))

    return (
        <div>

            <div className=' flex flex-col md:flex-row gap-6 w-full py-4 md:py-0'>
                <div className=' md:w-1/3'>
                    <div className=' flex gap-3 items-center mb-4'>
                        <span class="rounded-full h-5 w-5 bg-sky-500"></span>
                        <h3 className=' font-bold dark:text-gray-100 text-gray-600'>Todo ({ todoLists?.length })</h3>
                    </div>
                    <TodoList todos={todoLists} />
                </div>
                <div className=' md:w-1/3'>
                <div className=' flex gap-3 items-center mb-4'>
                        <span class="rounded-full h-5 w-5 bg-purple-500"></span>
                        <h3 className=' font-bold dark:text-gray-100 text-gray-600'>DOING ({ doingLists?.length })</h3>
                    </div>
                    <DoingList doings={doingLists} />
                </div>

                <div className=' md:w-1/3'>
                <div className=' flex gap-3 items-center mb-4'>
                        <span class="rounded-full h-5 w-5 bg-teal-400"></span>
                        <h3 className=' font-bold dark:text-gray-100 text-gray-600'>DONE ({ doneLists?.length })</h3>
                    </div>
                    {useMemo(
                     () => (
                        <DoneList dones={doneLists} />

                     ),
                     [doneLists]
                  )}
                </div>

            </div>

            <NewAddTask
            />
                <ToastContainer/>

        </div>


    )
}


const NewAddTask = () => {
    const modalstate = useSelector((state) => state.modal.isOpen)

    return (
        <Transition
            show={modalstate}
            enter="transition-opacity duration-[450ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-[450ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <AddNewTaskModal />
        </Transition>
    )
}



