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
    this.addToInventory(newItem)
  }

  cancelClick = () => {
    this.setState({
      name:"", price: 0, img:""
    })
  }

  addToInventory = (newItem) => {
    axios.post("/api/inventory", newItem).then(res => {
    }).catch(err => console.log("error", err))
    this.props.getRequest()
    this.cancelClick()
    
  }

  render() {
    return (
      <div>
        <input name="name" onChange={this.handleChange} />
        <input name="price" onChange={this.handleChange} />
        <input name="img" onChange={this.handleChange} />
        <button onClick={this.handleClick}>add to inventory</button>
        <button onClick={this.cancelClick}>cancel </button>

      </div>
    )
  }

}