import { useState } from 'react';

import {CreateTodo} from './components/CreateTodo'

import { RenderTodo } from './components/RenderTodo'

function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json= await res.json();
      setTodos(json.listOfTodos);
    })

  return (
    <div>
      <CreateTodo />
      <RenderTodo todos= {todos}/>
    </div>
  )
}

export default App
