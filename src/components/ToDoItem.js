import React from 'react';
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoItem = ({todo, deleteTodo, editTodo}) => {

    const renderContent = () => {
        if(todo.isEditing) {
            return <input type='text' />
        } else {
            return <span>
                <FontAwesomeIcon 
                    icon={faPencilAlt} 
                    style={{ cursor: 'pointer'}}
                    onClick={ () => editTodo(todo.id, 'new value')}   
                />
                <FontAwesomeIcon 
                    icon={faTrash} 
                    style={{ marginLeft: '10px', cursor: 'pointer'}}
                    onClick={ () => deleteTodo(todo.id)}   
                />
                </span>
        }
            
        }

   

    
    
    return (
        <div>
            <li style={{display: 'flex', justifyContent: 'space-between' }} className="list-group-item m-3">
                {!todo.isEditing ? todo.text : ''}
                {renderContent()}            
            </li>            
        </div>
        
    );
}

export default ToDoItem;