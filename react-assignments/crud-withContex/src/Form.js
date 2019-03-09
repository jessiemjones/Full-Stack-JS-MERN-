import React, { Component } from 'react';
import {withTodos} from './TodoProvider'

class Form extends Component {
    constructor(props){
        super (props)

        this.state={
            title: '',
            description: ''
        }
    }

    componentDidMount(){
        if(this.props.type === "edit"){
            let {title, description} = this.props.todo
            this.setState({title, description})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.type === "add" ? this.props.postTodo(this.state) : this.props.editTodo(this.props.todo._id, this.state)
    }

    render() {
        // console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit} className={this.props.type === "add" ? "randomclassname" : "otherclassnameforsytling"}>
                <input type="text" 
                        name="title" 
                        value={this.state.title} 
                        placeholder="Title" 
                        onChange={this.handleChange}/>
                <input type="text" 
                        name="description" 
                        value={this.state.description} 
                        placeholder="Description" 
                        onChange={this.handleChange}/>
                <button>{this.props.button}</button>
            </form>
        );
    }
}

export default withTodos(Form);