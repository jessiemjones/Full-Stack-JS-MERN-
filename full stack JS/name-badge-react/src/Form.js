import React, {Component} from 'react';
import Card from './Card'
import './App.css'

class Form extends Component {
    constructor(){
        super ()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            about: '',
            namesArray: []
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let {firstName, lastName, email, placeOfBirth, phone, favoriteFood, about} = this.state;
        let personCard = {firstName, lastName, email, placeOfBirth, phone, favoriteFood, about}
        this.setState((prevState)=>{
          return {
            namesArray: [...prevState.namesArray, personCard]
          }
          
        })
        this.clearInputs();
      }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    clearInputs = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            about: ''
        })
    }  
    render(){
        let newCard = this.state.namesArray.map((person, index) => <Card firstName={person.firstName} lastName={person.lastName} email={person.email} placeOfBirth={person.placeOfBirth} phone={person.phone} favoriteFood={person.favoriteFood} about={person.about} key={firstName + index}/>
        )
        const {firstName, lastName, email, placeOfBirth, phone, favoriteFood, about} = this.state;
        const isEnabled = firstName.length > 3 && lastName.length > 3 && email.length > 3 && placeOfBirth.length > 3 && phone.length > 3 && favoriteFood.length > 3 && about.length > 3;
        return (
            <React.Fragment>
                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                <input className="firstBox" value={firstName} type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}required></input>
                <input className="lastBox" value={lastName} type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} required></input>
                <input className="emailBox" value={email} type="text" name="email" placeholder="Email" onChange={this.handleChange} required></input>
                <input className="" value={placeOfBirth} type="text" name="placeOfBirth" placeholder="Place of Birth" onChange={this.handleChange} required></input>
                <input className="phoneBox" value={phone} type="number" name="phone" placeholder="Phone #:" onChange={this.handleChange} required></input>
                <input className="foodBox" value={favoriteFood} type="text" name="favoriteFood" placeholder="Favorite food" onChange={this.handleChange} required></input>
                <textarea className="aboutBox" value={about} type="text" name="about" placeholder="Tell us about yourself" onChange={this.handleChange} required></textarea>
                <button disabled={!isEnabled} >Submit</button>
                </form>
        
                <div>
                {newCard}
                </div>
            </React.Fragment>   
        )
    }
}

export default Form;