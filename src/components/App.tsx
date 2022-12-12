import React from 'react';
import { connect } from 'react-redux'
import { Todo, featchTodos, deleteTodo } from '../actions'
import { StoreState } from '../redusers'

interface AppProps {
  todos: Todo[];
  featchTodos: Function;
  deleteTodo: typeof deleteTodo
}

class _App extends React.Component<AppProps> {

  onButtonClick = (): void => {
    this.props.featchTodos()
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
      )
    })
  }

  render() {
    // console.log(this.props.todos);

    return (
      <div className="App">
        <div className='container'>
          <button className='btn btn-succses' onClick={this.onButtonClick}>Fetch</button>

          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(
  mapStateToProps,
  { featchTodos, deleteTodo }
)(_App);
