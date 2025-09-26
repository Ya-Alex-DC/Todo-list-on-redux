import React from 'react'
import './App.css';
import { InputRedux } from './components/Input';
import { TaskList } from './components/TaskList';

function App() {


	return (
		<div className='container'>
			<h1>ToDo-List on Redux</h1>
			<InputRedux />
		<TaskList />
		</div>

	);
}

export default App;
