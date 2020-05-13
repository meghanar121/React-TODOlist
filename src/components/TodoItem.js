import React from 'react';
import './TodoItem.css';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItem extends React.Component {
  render() {
    const { id, title } = this.props.todo;

    return (
      <li key={id}>
        {title}{' '}
        <i className="times-icon">
          <FontAwesomeIcon
            icon={faTimesCircle}
            onClick={this.props.delTodo.bind(this, id)}
          />
        </i>
      </li>
    );
  }
}

export default TodoItem;
