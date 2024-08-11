import React from 'react'
import check from '../assets/check.png'
import trash from '../assets/trash.png'
import internet from '../assets/internet.png'
function TodoListComponents({todoItems, setTodoItems}) {

  function removeTodo(id){
    console.log(id)
    let removeTodo = todoItems.filter((todo) => todo.id !== id)
    setTodoItems(removeTodo)

  }

  function chackTodo(id){
    console.log(id)
    let chack = todoItems.filter((todo) => todo.id !== id)
    setTodoItems(chack)
  }



  return (
    <div className='container mx-auto flex flex-col gap-[20px] items-center justify-center mt-[50px]'>
     
      {todoItems.length > 0 ? todoItems.map((todo)=> {
        return <div key={todo.id}
        className=' flex justify-between items-center w-[60%] p-[15px] bg-neutral-100 rounded-2xl border border-pink-800'>
           <img src={check} alt='check' className='h-[20px] w-[20px]' onClick={()=> chackTodo(todo.id)} />
          <h2 className=' font-medium' >{todo.title}</h2>
          <img src={trash} alt='' onClick={()=>removeTodo(todo.id)} className='h-[20px] w-[20px]' />
        </div>
      }) : <div>
        <h3 className='text-pink-700 text-[15px] font-semibold italic mb-[15px]'>hej, nema nijednog taska</h3>
        <img src={internet} alt='' className='h-[150px] w-[150px]' /></div>}

    </div>
  )
}

export default TodoListComponents