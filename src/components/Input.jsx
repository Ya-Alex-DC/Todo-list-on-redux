import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const InputRedux = () => {
	const input = useSelector(state => state.input)
	const dispatch = useDispatch()

	// const handleAdd = () => {
	// 	dispatch(addTodo()) // добавляем задачу
	// }

	const handleAdd = () => {
		dispatch({ type: 'ADD_TODO' }) // добавляем задачу альтернативная запись
	}

	// const handleChange = (e) => {
	// 	dispatch(setInput(e.target.value)) // обновляем input
	// }

	const handleChange = (e) => {
		dispatch({
			type: 'SET_INPUT',
			payload: e.target.value
		}) // обновляем input альтернативная запись
	}

	const state = useSelector(state => state)
	console.log(state)
	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={handleChange}
				placeholder="Введите текст...">
			</input>
			<button onClick={handleAdd}>Добавить</button>
		</div>
	)
}