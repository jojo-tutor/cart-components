import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = props => {
  const { className, label, onClick } = props;
  return (
    <input
      className={className}
      type="button"
      value={label}
      onClick={onClick}
    />
  );
};

ButtonComponent.defaultProps = {
  className: ""
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ButtonComponent;
