import React, { Component } from 'react';
import axios from 'axios'
import Product from './components/product/Product';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory : [{name:'red kite', price: 100, imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2IxIyr8X6jYRnui7sZEOrFEZJmS1SAmI8vFdxu4in_SqVbGJ"}]
    }
  }

  // componentDidMount() {
  //   axios.get("/api/products").then((res) => {
      
  //     this.setState({
  //       inventory: res.data
  //     })
  //   }).catch(err => console.log("error", err))
  // }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Dashboard inventory={this.state.inventory}/>
        <Product />
      </div>
    );
  }
}

export default App;
