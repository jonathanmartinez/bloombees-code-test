import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './Home.css';

//Component to display products as a grid
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <p className="lead text-center">Select your new super shoes!</p>
        <section className="row">
        {this.props.products.map(function(product, i) {
          return (
            <article className="col-12 col-sm-6 col-md-3 card text-center" key={i}>
              <Link to={'/detail/' + product.id}>
                <img className="card-img-top" src={product.img} alt={product.title}/>
                <div className="card-body">
                  <h4 className="card-title">{product.title}</h4>
                  <p className="card-text">{product.price} $</p>
                </div>
              </Link>
            </article>
          );
        }, this)}
        </section>
      </div>
    );
  }
}
