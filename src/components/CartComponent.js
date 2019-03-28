import React, { Component } from "react";
import CartListComponent from "./CartListComponent";
import SubTotalComponent from "./SubtotalComponent";
import { updateListItem } from "../tools";
import data from "../data";

class CartComponent extends Component {
  state = { list: data };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState(({ list }) => ({
      list: updateListItem(
        list,
        item => item.id === id,
        item => ({ quantity: Number(value) })
      )
    }));
  };

  handleRemove = id => {
    this.setState(({ list }) => ({
      list: list.filter(item => item.id !== id)
    }));
  };

  render() {
    const { list } = this.state;

    return (
      <div className="cart">
        <h1>Shopping Cart</h1>
        <div className="sections">
          <div className="cart-list-wrapper">
            <h2 className="cart-list-title">Items in your cart</h2>
            <CartListComponent
              list={list}
              onChange={this.handleChange}
              onRemove={this.handleRemove}
            />
          </div>
          <SubTotalComponent list={list} />
        </div>
      </div>
    );
  }
}

export default CartComponent;
