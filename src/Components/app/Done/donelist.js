import React, { useEffect, useState } from 'react'
import DoneItem from './doneitem'
import { useSelector } from 'react-redux'
const DoneList = ({dones}) => {
  

 


  return  dones?.map((item)=>(<DoneItem
             key={item.id}
             done={item}
            />))
            
   
       
}

export default DoneList