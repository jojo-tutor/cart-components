import React from "react";
import PropTypes from "prop-types";
import CartListItemComponent from "./CartListItemComponent";

const CartListComponent = props => {
  const { list, ...restProps } = props;
  return (
    <div className="cart-list">
      <div className="header">
        <div className="label">Product</div>
        <div className="label">Quantity</div>
        <div className="label">Total</div>
        <div className="label">Action</div>
      </div>
      {list.map(item => (
        <CartListItemComponent key={item.id} item={item} {...restProps} />
      ))}
    </div>
  );
};

CartListComponent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CartListComponent;
