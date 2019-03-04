import React, { Component } from 'react';

class Favorite extends Component {
    constructor(props){
        super(props)

        this.state = {
            edit: true,
            title: props.favorite.title,
            description: props.favorite.description,
            imgUrl: props.favorite.imgUrl
        }
    }
    toggle = () => {
        this.setState(prevState =>({
            edit: !prevState.edit
        }))
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        let {title, description, imgUrl} = this.state;
        const updatedFavorite = {title, description, imgUrl}
        this.props.editFavorite(id, updatedFavorite)
        console.log(updatedFavorite)
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState({
                [name]:value
            })
    }

    render() {
        let {favorite, deleteFavorite} =this.props
        return (
            <div>
                {this.state.edit ?
                <div className="favorite-things">
                    <h1>{favorite.title}</h1>
                    <p>{favorite.description}</p>
                    <img alt="" src={favorite.imgUrl}></img>
                    <button className="edit" onClick={this.toggle}>EDIT</button>
                    <button className="delete" onClick={() =>deleteFavorite(favorite._id)}>DELETE</button>
                </div>
                :
                <>
                    <form onSubmit={(e)=> this.handleSubmit(e, favorite._id)}>
                        <input type="text"
                            placeholder='New title' 
                            name='title' 
                            value={this.state.title} 
                            onChange={this.handleChange} />
                        <input type="text" 
                            placeholder='New description' 
                            name='description' 
                            value={this.state.description} 
                            onChange={this.handleChange} />
                        <input 
                            type="text"
                            name="imgUrl"
                            value={this.state.imgUrl}
                            placeholder="Paste an imgUrl of it here!"
                            onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </>
                }    
            </div>    
        );
    }
}

export default Favorite;


// import React from 'react';

// const Favorite = (props) => {
//     console.log(props)
//     return (
//         <div className="favorite-things">
//             <h1>{props.favorite.title}</h1>
//             <p>{props.favorite.description}</p>
//             <img alt="" src={props.favorite.imgUrl}></img>
//             <button onClick={() =>props.deleteFavorite(props.favorite._id)}>DELETE</button>
//         </div>
//     );
// };

// export default Favorite;