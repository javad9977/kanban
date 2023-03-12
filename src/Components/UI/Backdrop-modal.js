import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { closeAddModal, closeModal } from '../../redux/modal-slice'
export const Backdrop = () => {
  const modalstate = useSelector((state) => state.modal.isOpen)
  const dispatch=useDispatch()
  return modalstate?<div className=' backdropCustom' onClick={()=>dispatch(closeModal())}></div>:null
}
