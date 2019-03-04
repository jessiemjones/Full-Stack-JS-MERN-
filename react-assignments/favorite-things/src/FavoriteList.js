import React, { Component } from 'react';
import axios from 'axios';
import Favorite from './Favorite'

class FavoriteList extends Component {
    constructor (){
        super()

        this.state = {
            inputs: {
                title: "",
                description: '',
                imgUrl: ''
            },
            favorites: []
        }
    }

    async componentWillMount(){
        const response= await axios.get('https://api.vschool.io/jessie/todo')
        this.setState({
            favorites: response.data
        })
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }



    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.inputs)//logs whatever just got submitted
        axios.post('https://api.vschool.io/jessie/todo',this.state.inputs).then(response =>{
            console.log(response.data)
            this.setState(prevState =>({
                favorites: [...prevState.favorites, response.data].reverse(),
                inputs:{
                    title: '',
                    description: '',
                    imgUrl: ''
                }
            }))
        })
    }

    handleDelete = id => {
        axios.delete(`https:api.vschool.io/jessie/todo/${id}`).then(response =>{
            this.setState(prevState =>({
                favorites: prevState.favorites.filter(favorite =>favorite._id !==id)
            }))
            console.log(response.data)
        })
    }

    editFavorite = (id, updatedFavorite) => {
        axios.put(`https:api.vschool.io/jessie/todo/${id}`, updatedFavorite).then(response =>{
            this.setState(prevState =>({
                favorites: prevState.favorites.map(favorite =>{
                    if(favorite._id === id){
                        favorite = updatedFavorite
                        return favorite
                    }else {
                        return favorite
                    }
                })
            }))
        })
    }

    

    render() {
        const mappedFavorites = this.state.favorites.map(favorite => <Favorite key={favorite._id} favorite={favorite} deleteFavorite={this.handleDelete} editFavorite={this.editFavorite}/>)
        return (
            <div>
                <>
                    <form onSubmit={this.handleSubmit} className="form">
                        <h3>These are a few of my favorite things!</h3>
                        <input 
                            type="text"
                            name="title"
                            value={this.state.inputs.title}
                            placeholder="What is one of your favorite things?"
                            onChange={this.handleChange}/>
                        
                        <input 
                            type="text"
                            name="description"
                            value={this.state.inputs.description}
                            placeholder="Why do you like it so much?"
                            onChange={this.handleChange}/>

                        <input 
                            type="text"
                            name="imgUrl"
                            value={this.state.inputs.imgUrl}
                            placeholder="Paste an imgUrl of it here!"
                            onChange={this.handleChange}/>
                        
                        <button className="button" onClick={this.handleSubmit}>SUBMIT</button>     
                    </form>
                </>
                <>
                    {mappedFavorites}
                </>
            </div>    
        );
    }
}

export default FavoriteList;