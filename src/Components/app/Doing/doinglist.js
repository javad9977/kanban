import React from 'react'
import DoingItem from './doingitem'
import { useSelector } from 'react-redux'
const DoingList = ({doings}) =>{
  

 


  return  doings?.map((item)=>(<DoingItem
             key={item.id}
             doing={item}
            />))
            
   
       
}
export default DoingList