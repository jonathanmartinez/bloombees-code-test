import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
const MOCKS = require('../../utils/mocks');

//Component to edit a product
export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.product = this.props.products.find(p => p.id === this.props.match.params.id ? p : {});
    this.sizes = MOCKS.SIZES;
    this.colors = MOCKS.COLORS;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    this.props.onProductChange(this.product.id, key, e.target.value);
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={'/'}> Home </Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to={'/detail/' + this.product.id}>{this.product.title}</Link>
            </li>
            <li className="breadcrumb-item active">
              Customizer
            </li>
          </ol>

          <div className="row">
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={this.product.img} alt={this.product.title}/>
            </div>

            <div className="col-12 col-md-6">
              <form>
                <div className="form-group">
                  <label>Image</label>
                  <input
                    value={this.product.img}
                    onChange={(e) => this.handleChange(e, 'img')}
                    type="text"
                    className="form-control"
                    placeholder="Image"
                  />
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    value={this.product.title}
                    onChange={(e) => this.handleChange(e, 'title')}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    value={this.product.price}
                    onChange={(e) => this.handleChange(e, 'price')}
                    type="number"
                    step="0.01"
                    className="form-control"
                    placeholder="Price"
                  />
                </div>
                <div className="form-group">
                  <label>Selected size:</label>
                  <select
                    value={this.product.selectedSize}
                    onChange={(e) => this.handleChange(e, 'selectedSize')}
                    className="form-control"
                  >
                    {this.sizes.map(function(size, i) {
                      return (
                        <option key={i} value={size.id}>{size.size}</option>
                      );
                    }, this)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Selected color:</label>
                  <select
                    value={this.product.selectedColor}
                    onChange={(e) => this.handleChange(e, 'selectedColor')}
                    className="form-control"
                  >
                    {this.colors.map(function(color, i) {
                      return (
                        <option key={i} value={color.id}>{color.color}</option>
                      );
                    }, this)}
                  </select>
                </div>
                <Link to={'/detail/' + this.product.id}>
                  <button type="button" className="btn btn-info btn-block">Let's go!</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
