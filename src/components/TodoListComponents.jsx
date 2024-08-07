import React from 'react'
import { RiDeleteBack2Line } from "react-icons/ri";

function TodoListComponents({todoItems, setTodoItems}) {

  function removeTodo(id){
    console.log(id)
    let removeTodo = todoItems.filter((todo) => todo.id !== id)
    setTodoItems(removeTodo)

  }
  return (
    <div className='container mx-auto flex flex-col gap-[20px] items-center justify-center mt-[50px]'>
      {todoItems.length > 0 ? todoItems.map((todo)=> {
        return <div key={todo.id}
        className=' flex justify-between items-center w-[60%] p-[15px] bg-neutral-100 rounded-2xl border border-pink-800'>
          <h2 className=' font-medium' >{todo.title}</h2>
          <RiDeleteBack2Line size={24} color='red' onClick={()=>removeTodo(todo.id)}  />
        </div>
      }) : <h2 className=' font-semibold italic text-pink-800 text-lg'>📍  hej, nemas taskova danas</h2>}

    </div>
  )
}

export default TodoListComponents