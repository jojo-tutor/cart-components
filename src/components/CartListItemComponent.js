import React from "react";
import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { formatCurrency } from "../tools";

const CartListItemComponent = props => {
  const { item, onChange, onRemove } = props;
  const { id, title, imageSrc, quantity, price } = item;
  const total = Number(quantity) * Number(price);

  return (
    <div className="cart-item">
      <div className="product">
        <img alt={title} src={imageSrc} />
        <div className="details">
          <div className="title">{title}</div>
          <div className="price">{formatCurrency(price)}</div>
        </div>
      </div>
      <div className="quantity">
        <input
          id={id}
          type="number"
          value={quantity}
          min={0}
          onChange={onChange}
        />
      </div>
      <div className="total">
        <div className="value">{formatCurrency(total)}</div>
      </div>
      <div className="action">
        <ButtonComponent label="Remove" onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

CartListItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default CartListItemComponent;
