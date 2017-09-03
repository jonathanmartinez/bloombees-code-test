import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx';
import Edit from './components/Edit/Edit.jsx';
const MOCKS = require('./utils/mocks');

//Parent component that manages routes & state
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {products: MOCKS.PRODUCTS};
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  handleProductChange(id, key, newVal) {
    const products = this.state.products;
    products.find(p => p.id === id ? p : {})[key] = newVal;

    this.setState({products});
  }

  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/"  render={(props) => <Home products={this.state.products} {...props}/>}/>
            <Route path="/detail/:id" render={(props) => <Detail products={this.state.products} {...props}/>}/>
            <Route path="/edit/:id" render={(props) => <Edit products={this.state.products} onProductChange={this.handleProductChange} {...props}/>}/>
          </main>
        </div>
      </Router>
    );
  }
}
