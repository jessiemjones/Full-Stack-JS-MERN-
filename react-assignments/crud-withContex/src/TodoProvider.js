import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()

        this.state={
            todos: []
        }
    }
    getTodos = () => {
        axios.get('https://api.vschool.io/jessie/todo').then(response =>{
            this.setState({
                todos: response.data
            })
        })
    }

//post
    postTodo = newTodo => {
        console.log(this.state.inputs)
        axios.post('https://api.vschool.io/jessie/todo', newTodo).then(response =>{
            // console.log(this.state.inputs) //this just gives us some info
            console.log(response.data) //this gives ALL THE INFO, NOT JUST THE des and title
            this.setState(prevState=>({
                todos: [...prevState.todos, response.data],
            }))
        })
    }

    editTodo = (id, updatedTodo) => {
        axios.put(`https:api.vschool.io/jessie/todo/${id}`, updatedTodo).then(response =>{
            this.setState(prevState =>({
                todos: prevState.todos.map(todo => todo._id === id? todo = updatedTodo : todo)
            }))
        })
    }

    //delete
    deleteTodo = id => {
        axios.delete(`https:api.vschool.io/jessie/todo/${id}`).then(response =>{
            this.setState(prevState =>({
                todos: prevState.todos.filter(todo =>todo._id !== id)
            }))
            console.log(response.data)
        })
    }

    render() {
        return (
            //THESE VALUES ARE ALL PROPS NOW
            <Provider value={{
                getTodos: this.getTodos,
                postTodo: this.postTodo,
                deleteTodo: this.deleteTodo,
                editTodo: this.editTodo,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default TodoProvider;

export function withTodos (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props}/>}  
                    </Consumer>
}

/// value is the value from the render.  props is from the state