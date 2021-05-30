import React from 'react';
import './ToDoItem';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos, deleteTodo}) => {
    
    const renderedList = todos.map((todo, index) => {
        return (
            <ul className="list-group" key={todo.id}>
                <ToDoItem todo={todo} deleteTodo={deleteTodo}/>
            </ul>
            )
    });

    return (
        <div>
            {renderedList}
        </div>
        
    )
}

export default ToDoList;