import React from "react";
import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { getSubTotal, formatCurrency } from "../tools";

const SubTotalComponent = ({ list }) => {
  const subTotal = getSubTotal(list);
  return (
    <div className="sub-total">
      <div className="label">Subtotal:</div>
      <div className="value">{formatCurrency(subTotal)}</div>
      <ButtonComponent
        className="checkout"
        label="Checkout"
        onClick={() => {}}
      />
    </div>
  );
};

SubTotalComponent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SubTotalComponent;
