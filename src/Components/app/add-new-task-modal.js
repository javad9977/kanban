import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Input from '../UI/Form/Input';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from '../UI/Backdrop-modal';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Textare from '../UI/Form/Textare';
import { closeModal } from '../../redux/modal-slice';
import axios from 'axios';
import { createTodo } from '../../redux/todo-slice';
import { SlClose } from 'react-icons/sl'
const AddNewTaskModal = ({ children, isOpen }) => {
    const [formValues, setFormValues] = useState([])
    const [subtasksData, setSubtasksData] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const modalstate = useSelector((state) => state.modal.isOpen)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { subtasks: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    const onSubmit = data => {
       const maper=formValues.map(x=>x.subtasks)
        const payload={
            ...data,
            subtasks:maper
        }
        dispatch(createTodo({ payload }))
        dispatch(closeModal())




    }



    return (
        <>
            {modalstate && <Backdrop />}
            <div className={` backdrop-brightness-0
           overflow-x-hidden overflow-y-auto fixed inset-14 z-[300] 
           max-w-[400px] rounded-lg mx-auto px-8 py-4 bg-gray-500 dark:bg-[#2c2c38] text-white flex shadow-lg `}>
                <div className=' flex flex-col w-full'>
                    <h2 className=' font-bold'>
                        Add New Task
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="py-8  w-full gap-4 flex flex-col "
                    >

                        <div className=' flex flex-col gap-2'>
                            <label>Title</label>
                            <input
                                className=" px-2 py-2 outline-none bg-inherit border-2 rounded-lg placeholder:text-gray-400 placeholder:text-sm dark:border-slate-700"
                                placeholder="e.g. Take coffe break"
                                name="title" type="text"
                                {...register("title", { required: true })}

                            />
                            {errors.title && <p className=' text-red-300'>Title is required</p>}

                        </div>
                        <div className=' flex flex-col gap-2'>
                            <label>Description</label>
                            <textarea
                                className=" px-2 py-2 outline-none bg-inherit border-2 rounded-lg placeholder:text-gray-400 placeholder:text-sm dark:border-slate-700"
                                placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
                                name="description" type="text"
                                {...register("description", { required: true })}

                            />
                            {errors.description && <p className=' text-red-300'>Description is required</p>}

                        </div>
                        <div className=' flex flex-col gap-2'>

                            {formValues.map((element, index) => (
                                <div className=" flex items-center gap-3 justify-between" key={index}>
                                    <input
                                        className=" px-2 w-full py-2 outline-none bg-inherit border-2 rounded-lg placeholder:text-gray-400 placeholder:text-sm bg-border-slate-700"
                                        placeholder="e.g. Make coffe break"
                                        name="subtasks" type="text"
                                        onChange={(evnt) => handleChange(index, evnt)} />
                                    <SlClose className=' text-lg' onClick={() => removeFormFields(index)} />
                                </div>
                            ))}
                            <label>Subtasks</label>


                        </div>
                        <button
                            className=' bg-white text-indigo-500 text-center py-2 rounded-xl shadow-sm w-full '
                            type="button" onClick={() => addFormFields()}>
                            + Add New Subtask


                        </button>


                        <div className=' flex flex-col gap-2'>
                            <label>Status</label>
                            <select
                                name="status"
                                {...register("status", { required: true })}
                                
                                className=" block px-2 py-2 outline-none bg-inherit border-2 rounded-lg  dark:border-slate-700"
                            >
                                <option className=' text-black' value="" hidden>Select Status</option>
                                <option  className=' text-black'
                                    value="todo">Todo</option>
                                <option  className=' text-black'

                                    value="doing">Doing</option>
                                <option  className=' text-black'

                                    value="done">Done</option>
                            </select>

                        </div>
                        {errors.status && <p className=' text-red-300'>Status is required</p>}

                        <button
                            type="submit"
                            className=' bg-indigo-500 text-white text-center py-2 rounded-xl shadow-sm w-full ' >
                            Create Task
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default AddNewTaskModal