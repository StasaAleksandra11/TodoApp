import React, { useState } from 'react';
import reminder from '../assets/reminder.png'
function TodoComponents({ todoItems, setTodoItems }) {
	const [currentTodo, setCurrentTodo] = useState('');

	function handleTodo(e) {
		setCurrentTodo(e.target.value);
	}
	function handleTodoButton() {
		if (currentTodo) {
			setTodoItems([
				...todoItems,
				{ title: currentTodo, id: new Date().getTime() },
			]);
			setCurrentTodo('');
		}
	}

	return (
		<div className='container mx-auto flex flex-col items-center justify-center mt-[40px]'>
			<img src={reminder} alt='' className='h-[130px] w-[160px] ' />
			
			<input
				type='text'
				placeholder='Insert Your Task . .'
				value={currentTodo}
				onChange={handleTodo}
				className='px-[15px] py-[8px] mt-[30px] rounded-3xl text-pink-900 border border-pink-700 outline-none font-medium placeholder:font-normal placeholder:text-center placeholder:italic bg-neutral-100 overflow-hidden '
				
			/>
			<button
				className='px-[20px] py-[10px] mt-[25px] bg-pink-800 text-white rounded-2xl font-medium'
				onClick={handleTodoButton}>
				Add Task
			</button>
		</div>
	);
}

export default TodoComponents;
