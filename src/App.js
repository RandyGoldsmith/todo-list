import React from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';


class App extends React.Component {
  state = { todos: [] }
  
    

    addTodo = (todo) => {
      const newToDos = [...this.state.todos, todo];
      this.setState({
        todos: newToDos
      });
    };
  
  


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          <Form addTodo={this.addTodo}/>
          </div>
            
        </div>
        <div className="row">
        <div className="col">
        <ToDoList todos={this.state.todos}/>
        </div>
            
        </div>    
      </div>
      
    )
  }
}

export default App;
