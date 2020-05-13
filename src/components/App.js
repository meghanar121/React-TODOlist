import React from 'react';
import './App.css';

import Todos from './Todos';
import AddTodo from './AddTodo';
import Footer from './Footer';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        title: 'Prepare breakfast',
        completed: false
      },
      {
        id: 1,
        title: 'watering plants',
        completed: true
      },
      {
        id: 2,
        title: 'dive into reactJS',
        completed: false
      },
      {
        id: 3,
        title: 'Develope awsome app!!',
        completed: false
      }
    ]
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  renderContent = () => {
    if (this.state.todos.length === 0) {
      return <p className="successfully-message">Well done!</p>;
    }

    return <Todos todos={this.state.todos} delTodo={this.delTodo} />;
  };

  render() {
    return (
      <div className="app_container">
        <div className="todos_container">
          <h2>Todos</h2>
          <AddTodo addTodo={this.addTodo} />
          {this.renderContent()}
        </div>
        <Footer message={'Made with'} devName={'Meghana Rajappa'} />
      </div>
    );
  }
}

export default App;
