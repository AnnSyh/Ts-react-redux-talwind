import React from 'react';
import { connect } from 'react-redux'
import { Todo, featchTodos, deleteTodo } from '../actions'
import { StoreState } from '../redusers'

interface AppProps {
  todos: Todo[];
  // featchTodos: typeof featchTodos; - дает ошибку в (_App)
  featchTodos: Function;
  deleteTodo: typeof deleteTodo
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props)

    this.state = { fetching: false }
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.featchTodos()
    this.setState({ fetching: true })
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div
          className='item'
          onClick={() => this.onTodoClick(todo.id)}
          key={todo.id}>
          {todo.title}
          <span aria-hidden="true">x</span>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props.todos);

    return (
      <div className="App">
        <div className='container mx-auto'>
          <button className='btn btn-primary block mx-auto' onClick={this.onButtonClick}>Fetch</button>
          {this.state.fetching ? 'LOADING ....' : null}

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
