import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { closeAddModal, closeModal, closeUpdateModal } from '../../redux/modal-slice'
export  const BackDropModal2 = ({isOpen,isClose}) => {
  console.log(isOpen)
  return isOpen &&<div className=' backdropCustom2 ' onClick={isClose}></div>
}
