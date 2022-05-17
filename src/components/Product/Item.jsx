import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="product__item">
        <img src={this.props.item.img} alt="" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <span>{this.props.item.price}</span>
        <button className="add-to-cart">+</button>
      </div>
    );
  }
}

export default Item;
