
import { useEffect, useState } from 'react'
import TodoComponents from './components/TodoComponents'
import TodoListComponents from './components/TodoListComponents'




function App() {
  
  const [todoItems, setTodoItems] = useState([])
  
  useEffect(() => {
   console.log(todoItems)

  },[todoItems])

  return (
    <div className='bg-gradient-to-r from-purple-200 to-pink-200 h-screen '>
      <div className="container mx-auto  flex flex-col items-center justify-center">
      <TodoComponents todoItems={todoItems} setTodoItems={setTodoItems}/>
      <TodoListComponents todoItems={todoItems} setTodoItems={setTodoItems}/>

      
      
      </div>
     
    </div>
  )
}

export default App
