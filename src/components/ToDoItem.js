import React from 'react';

const ToDoItem = ({todo}) => {
    return (
        <li className="list-group-item m-3">
            {todo.text}
        </li>
    );
}

export default ToDoItem;