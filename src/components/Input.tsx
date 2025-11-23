import React, { ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'

export const InputRedux: React.FC = () => {
	const input = useSelector((state: RootState) => state.input)
	const dispatch = useDispatch<AppDispatch>()

	const handleAdd = () => {
		dispatch({ type: 'ADD_TODO' })
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'SET_INPUT',
			payload: e.target.value
		})
	}

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