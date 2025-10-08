import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const InputRedux = () => {
	const input = useSelector(state => state.input)
	const dispatch = useDispatch()

	const handleAdd = () => {
		dispatch({ type: 'ADD_TODO' })
	}

	const handleChange = (e) => {
		dispatch({
			type: 'SET_INPUT',
			payload: e.target.value
		})
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