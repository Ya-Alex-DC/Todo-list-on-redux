import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from 'classnames'
import { RootState, AppDispatch } from '../store/store'
import { Todo } from '../type'

export const TaskList: React.FC = () => {
	const todos = useSelector((state: RootState) => state.todos)
	const dispatch = useDispatch<AppDispatch>()

	const removeTask = (id: number) => {
		dispatch({ type: 'REMOVE_TODO', payload: id })
	}

	const toogleTask = (id: number) => {
		dispatch({ type: 'CHANGE_STATUS', payload: id })
	}

	return (
		<ul className="list_todo">
			{todos.map((todo: Todo) => (
				<li
				 className={classes('list_todo2',
				  { list_todo2_done: todo.done,
				   })}
				   key={todo.id}>

					<span onClick={() => toogleTask(todo.id)}
						className={classes('list_todo3', { done: todo.done })}>
						{todo.text}
					</span>

					<button onClick={() => removeTask(todo.id)}>Удалить</button>
				</li>

			))}
		</ul>
	)
}