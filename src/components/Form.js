import React from 'react';
import './Form.css';
import shortid from 'shortid';

class Form extends React.Component {
    state = { term: ''};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo({
            id: shortid.generate(),
            text: this.state.term,
            isEditing: false
        });

        this.setState({
            term: ''
        });
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value});
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label></label>
                    <div className="input-group">               
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter todo item" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick={this.handleSubmit}
                            >Add ToDo
                        </button>
                    </div> 
            </form>
                
          
        )
    }
}

export default Form;