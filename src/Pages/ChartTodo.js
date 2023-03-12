import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {Chart as ChartJS} from 'chart.js/auto'

import { Bar } from 'react-chartjs-2';
const ChartTodo = () => {
  const todoLists = useSelector((state)=> state.todo.todos.filter(x=>x.status==="todo"))
  const doingLists = useSelector((state)=> state.todo.todos.filter(x=>x.status==="doing"))
  const doneLists = useSelector((state)=> state.todo.todos.filter(x=>x.status==="done"))

  const data = {
    labels: ["todos","doing","done"],
    datasets: [{
      label: 'Count TodoList Project is',
      data: [todoLists.length, doingLists.length, doneLists.length],
     
      borderWidth: 1
    }]
  };
  const options = {
    plugins: {
    
       legend: {
         
          position: 'top',
       },

    },
 };


  return (
    <div className=' py-5'>
      <p className=' text-black bg-slate-300 dark:text-white font-bold dark:bg-purple-600 px-6 py-3 inline rounded-lg text-center'>
      The Chart Todo Project
      </p>
      <div className=' my-12'>
      <Bar options={options} data={data} height="85px" />

      </div>
    </div>
  )
}

export default ChartTodo