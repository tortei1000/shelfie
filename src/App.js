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
      inventory : []
    }
  }

  componentDidMount() {
    console.log("am I even", this.state.inventory)
    axios.get("/api/inventory").then((res) => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log("error", err))
  }

  render() {
    console.log("whats wrong with me ", this.state.inventory)
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
