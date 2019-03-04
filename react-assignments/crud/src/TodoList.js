import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo'

class TodoList extends Component {
    constructor(){
        super()
        this.state = {
            inputs: {
                title: '',
                description: ''
            },
            todos: []
        }
    }

    async componentDidMount(){
        const response= await axios.get('https://api.vschool.io/jessie/todo')
        this.setState({
            todos: response.data
        })
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }
//post
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.inputs)
        axios.post('https://api.vschool.io/jessie/todo', this.state.inputs).then(response =>{
            console.log(this.state.inputs) //this just gives us some info
            console.log(response.data) //this gives ALL THE INFO, NOT JUST THE des and title
            this.setState(prevState=>({
                todos: [...prevState.todos, response.data],
                inputs: {
                    title:'',
                    description: ''
                }
            }))
        })
    }

    editTodo = (id, updatedTodo) => {
        axios.put(`https:api.vschool.io/jessie/todo/${id}`, updatedTodo).then(response =>{
            this.setState(prevState =>({
                todos: prevState.todos.map(todo =>{
                    if(todo._id === id){
                        todo = updatedTodo
                        return todo
                    }else {
                        return todo
                    }
                })
            }))
        })
    }

    //delete
    handleDelete = id => {
        axios.delete(`https:api.vschool.io/jessie/todo/${id}`).then(response =>{
            this.setState(prevState =>({
                todos: prevState.todos.filter(todo =>todo._id !== id)
            }))
            console.log(response.data)
        })
    }
    


    render() {
        const mappedTodos = this.state.todos.map(todo => <Todo key={todo._id} todo={todo} deleteTodo={this.handleDelete} editTodo={this.editTodo} />)
        return (
            <div>
                <>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="title" value={this.state.inputs.title} placeholder="Title" onChange={this.handleChange}></input>
                        <input type="text" name="description" value={this.state.inputs.description} placeholder="Description" onChange={this.handleChange}></input>
                        <button onClick={this.handleSubmit}>SUBMIT</button>
                      
                    </form>
                </>
                <>
                    {mappedTodos}
                </>
            </div>
            
            
            
        );
    }
}

export default TodoList;