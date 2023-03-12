import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal-slice'
import todoReducer from './todo-slice'
const store = configureStore({
  reducer: {
      modal:modalReducer,
      todo:todoReducer,
  }
})

export default store