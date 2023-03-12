import React, { useEffect, useState } from 'react'
import TodoItem from './todoitem'
import { useSelector } from 'react-redux'
import axios from 'axios'
import UpdatedTaskModal from '../update-task-modal'
const TodoList = ({todos}) => {
  

 


  return  todos?.map((item)=>(<TodoItem
             key={item.id}
             todo={item}
            />))
            
   
       
}

export default TodoList