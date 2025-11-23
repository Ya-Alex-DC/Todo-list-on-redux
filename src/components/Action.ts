import { Action } from '../type'

export const setInput = (text: string): Action => ({
	type: 'SET_INPUT',
	payload: text
})

export const addTodo = (): Action => ({
	type: 'ADD_TODO'
})

export const removeTodo = (id: number): Action => ({
	type: 'REMOVE_TODO',
	payload: id,
})

export const changeStatus = (id: number): Action => ({
	type: 'CHANGE_STATUS',
	payload: id,
})