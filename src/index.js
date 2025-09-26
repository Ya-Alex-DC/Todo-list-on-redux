import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const deafaultState = {
	todos: [],
	input: ''
}



const reducer = (state = deafaultState, action) => {
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
			return { ...state, todos: state.todos.filter(e => e.id !== action.payload) }

		case 'CHANGE_STATUS':
			return {
				...state, todos: state.todos.map(e => e.id === action.payload ? 
					{...e, done: !e.done} : {...e}
				)
			}

		default:
			return state
	}
}

const store = createStore(reducer)

console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>

);

