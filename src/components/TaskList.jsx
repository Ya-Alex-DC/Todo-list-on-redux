import { useSelector, useDispatch } from 'react-redux'
import classes from 'classnames'

export const TaskList = () => {

	const dispatch = useDispatch()

	const removeTask = (id) => {
		dispatch({ type: 'REMOVE_TODO', payload: id })
	}

	const toogleTask = (id) => {
		dispatch({ type: 'CHANGE_STATUS', payload: id })
	}

	const todos = useSelector(state => state.todos)
	return (
		<ul className="list_todo">
			{todos.map((todo) => (
				<li className={classes('list_todo2', { list_todo2_done: todo.done })} key={todo.id}>

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