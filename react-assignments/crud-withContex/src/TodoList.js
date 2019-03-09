import React, { Component } from 'react';
import Todo from './Todo'
import {withTodos} from './TodoProvider'

class TodoList extends Component {
    componentDidMount(){
        this.props.getTodos();
        // console.log(this.props.todos)
    }

    


    render() {
        const mappedTodos = this.props.todos.map(todo => <Todo key={todo._id} todo={todo}/>)
        return (
            <div>
                {mappedTodos}
            </div>
            
            
            
        );
    }
}

export default withTodos(TodoList);