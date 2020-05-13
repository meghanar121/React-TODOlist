import React from 'react';
import './AddTodo.css';


class AddTodo extends React.Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.title === '') {
      alert('Title can not be empty')
    } else {
      this.props.addTodo(this.state.title);
    }
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} className="formAddTodo">
        <input
          type="text"
          name="title"
          value={this.state.title}
          id="addTodoInput"
          onChange={this.onChange}
          placeholder="Add Todo here...."
        />
        <input type="submit" value="Submit" className="btn btn-default" />
      </form>
    );
  }
}

export default AddTodo;
