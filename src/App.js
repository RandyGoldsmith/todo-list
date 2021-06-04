import React from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';


class App extends React.Component {
  state = { 
    todos: []
  }
  
    

   addTodo = (todo) => {
      const newToDos = [...this.state.todos, todo];
      this.setState({
        todos: newToDos
      });
    };
  
    deleteTodo = (id) => {
      const updatedTodos = this.state.todos.filter((todo) => {
        return todo.id !== id;
      });

      this.setState({
        todos: updatedTodos
      });
    }

    editTodo = (id, newValue) => {
      const editedTodos = [...this.state.todos].map((todo) => {
        if(todo.id === id) {
          todo.isEditing = true;
          todo.text = newValue;
          
        }
        return todo.text;   
      });
      
      this.setState({
        todos: [...this.state.todos, editedTodos]
        
      });
      
     
    }

    



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          <Form addTodo={this.addTodo} />
          </div>
            
        </div>
        <div className="row">
        <div className="col">
        <ToDoList 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
          editTodo={this.editTodo}  
        />
        </div>
            
        </div>    
      </div>
      
    )
  }
}

export default App;
