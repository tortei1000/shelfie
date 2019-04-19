import React, { Component } from "react";
import axios from 'axios'



export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    }
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newItem = this.state
    this.createRecipe(newItem)
  }

  cancelClick = () => {
    this.setState({
      name:"", price: 0, imgurl:""
    })
  }

  addToInventory = (newItem) => {
    axios.post("/api/recipes", newItem).then(res => {
    }).catch(err => console.log("error", err))
  }

  render() {
    return (
      <div>
        <input name="name" onChange={this.handleChange} />
        <input name="price" onChange={this.handleChange} />
        <input name="imgurl" onChange={this.handleChange} />
        <button onClick={this.handleClick}>add to inventory</button>
        <button onClick={this.cancelClick}>cancel </button>

      </div>
    )
  }

}