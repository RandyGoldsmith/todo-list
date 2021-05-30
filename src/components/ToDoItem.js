import React from 'react';
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoItem = ({todo, deleteTodo}) => {
    
    return (
        <div>
        <li style={{display: 'flex', justifyContent: 'space-between' }} className="list-group-item m-3">
            {todo.text}
            <span style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faPencilAlt} />
                <FontAwesomeIcon 
                    icon={faTrash} 
                    style={{ marginLeft: '10px'}}
                    onClick={ () => deleteTodo(todo.id)}   
                    />
            </span>
                                    
        </li>
        
        </div>
    );
}

export default ToDoItem;