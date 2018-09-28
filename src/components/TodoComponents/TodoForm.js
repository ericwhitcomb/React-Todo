import React, { Component } from 'react'
import './Todo.css';

class TodoForm extends Component {

    state = {task: ""};

    handleChange = event => {
        this.setState({
            task: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo({id: Date.now(), task: this.state.task, completed: false});
        this.setState({task: ""});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input value={this.state.task} onChange={this.handleChange} />
                <button type="submit">Add</button>
                <button>Clear Selected</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
