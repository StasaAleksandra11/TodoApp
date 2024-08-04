import React from 'react'
import { RiDeleteBack2Line } from "react-icons/ri";

function TodoListComponents({todoItems}) {
  return (
    <div className='container mx-auto flex flex-col gap-[20px] items-center justify-center mt-[50px]'>
      {todoItems?.map((todo)=> {
        return <div key={todo.id}
        className=' flex justify-between items-center w-[60%] p-[15px] bg-neutral-100 rounded-2xl border border-pink-800'>
          <h2 className=' font-medium' >{todo.title}</h2>
          <RiDeleteBack2Line size={24} color='red' />
        </div>
      })}
    </div>
  )
}

export default TodoListComponents