import React, { Component } from "react";
import Product from '../product/Product'
import axios from 'axios'


export default class Dashboard extends Component {

  deleteItem = (item) => {
    console.log("look at me", item)
    axios.delete(`/api/inventory/${item.id}`).then(res => {
      
    }).catch(err => console.log("error", err))
    this.props.getRequest()
  }

  render() {
    console.log("here I am before", this.props.inventory)
    let {inventory} = this.props
    return(
      <div>
        {inventory[0] ? inventory.map((item)=>{
          return (
            <div>
              <Product item={item} deleteItem={this.deleteItem}/>
            </div>
          )
        }):null
        } 
        
      </div>
    )

  }
}