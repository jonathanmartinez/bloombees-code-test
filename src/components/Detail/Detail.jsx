import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './Detail.css';
const MOCKS = require('../../utils/mocks');

//Component to render a product
export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.product = this.props.products.find(p => p.id === this.props.match.params.id ? p : {});
    this.sizes = MOCKS.SIZES;
    this.colors = MOCKS.COLORS;
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
              {this.product.title}
            </li>
          </ol>

          <div className="row">
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={this.product.img} alt={this.product.title}/>
            </div>

            <div className="col-12 col-md-6">
              <h3>{this.product.title}</h3>
              <p>{this.product.price} $</p>
              <p>Selected size:</p>
              <table className="table table-bordered">
              <tbody>
                <tr>
                  {this.sizes.map(function(size, i) {
                    return (
                      <td key={i} className={'text-center ' + (size.id === this.product.selectedSize ? 'selected' : '')}>
                        {size.size}
                      </td>
                    );
                  }, this)}
                </tr>
              </tbody>
              </table>
              <p>Selected color:</p>
              <table className="table table-bordered">
              <tbody>
                <tr>
                  {this.colors.map(function(color, i) {
                    return (
                      <td key={i} className={'text-center ' + (color.id === this.product.selectedColor ? 'selected' : '')}>
                        <i className={'fa fa-circle '+ color.color}></i> {color.color}
                      </td>
                    );
                  }, this)}
                </tr>
              </tbody>
              </table>
              <Link to={'/edit/' + this.product.id}>
                <button className="btn btn-success btn-block">Customize</button>
              </Link>
            </div>
          </div>
          
          <div className="product-description">
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            <p>No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    );
  }
}
