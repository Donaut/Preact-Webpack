import { h, Component } from 'preact';
import TodoList from './TodoList'


export default class App extends Component {
	render() {
		return (
			<div>
				hello it's me.
				<TodoList />
			</div>
		);
	}
}

