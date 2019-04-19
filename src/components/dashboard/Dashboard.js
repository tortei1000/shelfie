import React, { Component } from "react";
import Product from '../product/Product'



export default class Dashboard extends Component {

  render() {
    console.log("this is ", inventory)
    let { inventory } = this.props
    if (inventory.length > 0) {
      console.log(this.props.inventory[0].ingredients)
    }
    let oneItem = inventory.map((item) => {
      return (
        <div>
          <h1>{item.name}</h1>
          <h3>{item.price}</h3>
          <img src={item.imgurl} width="300px" />
        </div>


      )
    })


    return (
      <div>
        {oneItem}
      </div>
    )

  }
}