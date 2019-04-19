import React, { Component } from "react";



export default class Product extends Component {

  render(){
    console.log("here", this.props)
    console.log("again", this.props.item)
    const {item} = this.props
    return (
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <img src={item.imgurl} />
        
      </div>
      )
  }

}