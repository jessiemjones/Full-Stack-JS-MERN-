import React, { Component } from 'react';
import {withTodos} from './TodoProvider'
import Form from './Form'


class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
            toggled: true
        }
    }
    toggle = () => {
        this.setState(prevState =>({
            toggled: !prevState.toggled
        }))
    }


    render() {
        let {todo, deleteTodo} = this.props;
        return (
            <div>
                {this.state.toggled ? 
                <>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <button onClick={() =>deleteTodo(todo._id)}>Delete</button>
                    <button onClick={this.toggle}>Edit</button>
                </>
                :
                <>
                    <Form button="Save Changes" type="edit" todo={todo}/>
                </>
                }
            </div>
        );
    }
}

export default withTodos(Todo);