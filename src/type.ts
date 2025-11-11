export interface Todo {
	id: number
	text: string
	done: boolean
}

export interface State {
	todos: Todo[]
	input: string
}


export type Action =
	| { type: 'SET_INPUT'; payload: string }
	| { type: 'ADD_TODO' }
	| { type: 'REMOVE_TODO'; payload: number }
	| { type: 'CHANGE_STATUS'; payload: number }