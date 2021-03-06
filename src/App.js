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
    
    axios.get("/api/inventory").then((res) => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log("error", err))
  }

  refreshData = () => {
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
        <Form getRequest={this.refreshData}/>
        <Dashboard inventory={this.state.inventory} getRequest={this.refreshData}/>
        
      </div>
    );
  }
}

export default App;
