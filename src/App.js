import Layout from "./Components/Layout/Layout";
import { Home } from "./Pages/Home";
import {Routes , Route} from 'react-router-dom'
import ChartTodo from "./Pages/ChartTodo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "./redux/todo-slice";
function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/charts" element={<ChartTodo/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
