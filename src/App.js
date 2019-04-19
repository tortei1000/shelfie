import React, { Component } from 'react';

import Product from './components/product/Product';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Dashboard />
        <Product />
      </div>
    );
  }
}

export default App;
