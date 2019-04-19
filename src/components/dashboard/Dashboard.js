import React, { Component } from "react";
import Product from '../product/Product'



export default class Dashboard extends Component {

  render(){

    return(
      
      <div>
        {
          this.props.inventory.length ?  this.props.inventory.map(item => {
          console.log(this.props.inv)
              return (
                <div>
                  <Product     
                    item={item}
                     />
                </div>
              )
            }
            )
          :null
        }

      </div>
    )


  }

}