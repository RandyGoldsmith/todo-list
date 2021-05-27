import React from 'react';
import './ToDoItem';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos}) => {
    const renderedList = todos.map((todo, index) => {
        return (
            <ul className="list-group">
                <ToDoItem todo={todo}/>
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