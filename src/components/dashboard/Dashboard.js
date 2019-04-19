import React, { Component } from "react";
import Product from '../product/Product'



export default class Dashboard extends Component {

  render() {
    console.log("here I am before", this.props.inventory)
    let {inventory} = this.props
    return(
      <div>
        {inventory[0] ? inventory.map((item)=>{
          return (
            <div>
              <Product item={item} />
            </div>
          )
        }):null
        } 
        
      </div>
    )

  }
}