import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos=createAsyncThunk('todos/fetch',
async()=>{
    const response=await axios.get("http://localhost:3500/todos")
    const data=response.data
    return data
})


export const createTodo = createAsyncThunk(
    "todo/create",
    async ({payload}) => {
      const res = await axios.post('http://localhost:3500/todos',payload);
      return res.data;
    }
  );

  export const deleteTodo = createAsyncThunk(
    "todo/delete",
    async ({ id }) => {
       await axios.delete(`http://localhost:3500/todos/${id}`);

     return id;     
    }
  );
  export const updateTodo = createAsyncThunk("cars/updateAPI", async (payload) => {
    const response = await axios.put(
      `http://localhost:3500/todos/${payload.id}`,
      payload
    );
    console.log(response.data)
    return response.data;
  });
const initialState={
    todos:localStorage.getItem("todos")?JSON.parse(localStorage.getItem('todos')):[],
    loading:false,
    error:""
}


const todoSlice=createSlice({
    name:'todo',
    initialState,
   
    extraReducers: {

        [createTodo.pending]: (state, action) => {
            state.loading = true;
          },
          [createTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todos.push(action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))

        },
          [createTodo.rejected]: (state, action) => {
            state.loading = false;
          },
          [fetchTodos.pending]: (state, action) => {
            state.loading = true;

          },
          [fetchTodos.fulfilled]: (state, action) => {
            state.loading = false;
            state.todos=action.payload
            localStorage.setItem("todos", JSON.stringify(state.todos))
          },
          [deleteTodo.fulfilled]: (state, action) => {
            state.todos=state.todos.filter(x=>x.id!==action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
          },
          [updateTodo.fulfilled]: (state, action) => {
            state.todos = state.todos.filter((_) => _.id !== action.payload.id);
            state.todos.unshift(action.payload);
          }
    }, 
})

export default todoSlice.reducer;