import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Input from '../UI/Form/Input';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Textare from '../UI/Form/Textare';
import { addToTodoList, updateTodo } from '../../redux/todo-slice';
import { BackDropModal2 } from '../UI/Backdrop-modal2';
const UpdatedTaskModal = ({ isOpen, todo ,isClose}) => {
    const [selectedStatus,setSelectedStatus]=useState(todo.status)
    const dispatch = useDispatch()
    const closeModal=()=>{

    }
    const onChangeHandler=(e)=>{
            setSelectedStatus(e.target.value)
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(todo)
        const payload={
            ...todo,
            status:selectedStatus
        }
        console.log(payload)

        dispatch(updateTodo(payload))
    }


    return (
        <>
          
            
          {isOpen &&  <><BackDropModal2 isOpen={isOpen} isClose={isClose}/><div className={`
           overflow-x-hidden overflow-y-auto fixed inset-20 z-[300] 
           max-w-[400px] rounded-lg mx-auto px-8 py-4 bg-gray-500 dark:bg-[#2c2c38] text-white flex shadow-lg `}>
                <div className=' flex flex-col w-full'>
                    <p className="  mb-4 dark:text-slate-50  text-lg font-bold">
                        {todo.title}
                    </p>
                    <p className=' dark:text-gray-400  text-sm'>
                        {todo.description}
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="py-8  w-full gap-4 flex flex-col "
                    >

                        <div className=' flex flex-col gap-4'>
                            <label>Subtasks ({todo?.subtasks?.length})</label>

                          {
                              todo?.subtasks?.map(item=>(
                                <div className='  dark:bg-[#21212d] dark:bg-slate-700 bg-gray-100   px-6 py-2 text-white rounded-md shadow-sm '>
                                <div className=' flex item-center gap-3'>
                                    <input type="checkbox" />
                                    <p className=' text-black dark:text-slate-400 text-lg'>{item}</p>

                                </div>
                            </div>
                              ))
                          }
                         
                        </div>

                        <div className=' flex flex-col gap-2'>
                            <label>Status</label>
                            <select
                                name="status"
                                {...register("status", { required: true })}
                                value={selectedStatus}
                                onChange={onChangeHandler}
                                className=" block px-2 py-2 outline-none bg-inherit border-2 rounded-lg  dark:border-slate-700"
                            >
                               <option  className=' text-black'
                                    value="todo">Todo</option>
                                <option  className=' text-black'

                                    value="doing">Doing</option>
                                <option  className=' text-black'

                                    value="done">Done</option>
                            </select>

                        </div>
                        <button
                            type="submit"
                            className=' bg-indigo-500 text-white text-center py-2 rounded-xl shadow-sm w-full '>
                            Update Task
                        </button>
                    </form>

                </div>
            </div></>}
            
        </>
        
        
    )
}

export default UpdatedTaskModal