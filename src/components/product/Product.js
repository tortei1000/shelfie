import React, {Component} from "react";

export default class Product extends Component {
  


  render(){
    
    console.log("here it is", this.props.item)
    let {item} = this.props
    return(
      <div>
        <h1>{item.name}</h1>
        <h3>{item.price}</h3>
        <img src={item.imgurl} />
      </div>
    )

    
    
  }
}