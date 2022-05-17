import React, { Component } from "react";
import Item from "./Item";
import "./product.css";

export class Product extends Component {
  render() {
    return (
      <main>
        <div className="product">
          {this.props.items.map((el) => (
            <Item key={el.id} item={el} />
          ))}
        </div>
      </main>
    );
  }
}

export default Product;
