import { Action, State } from '../type'



const deafaultState: State = {
	todos: [],
	input: ''
}

export const reducer = (state = deafaultState,
	 action: Action
	): State => {
	switch (action.type) {
		case 'SET_INPUT':
			return { ...state, input: action.payload }

		case 'ADD_TODO':
			if (state.input.trim() === '') return state
			return {
				...state,
				todos: [
					...state.todos,
					{ id: Math.random(), text: state.input, done: false }
				],
				input: '',
			}
		case 'REMOVE_TODO':
			return { ...state,
				 todos: state.todos.filter((e) => e.id !== action.payload) }

		case 'CHANGE_STATUS':
			return {
				...state,
				 todos: state.todos.map((e) => e.id === action.payload ?
					{ ...e, done: !e.done } : { ...e }
				)
			}

		default:
			return state
	}
}