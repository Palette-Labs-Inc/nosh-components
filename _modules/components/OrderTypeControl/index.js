function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import { useOrder } from '../../contexts/OrderContext';
export const OrderTypeControl = props => {
  const {
    UIComponent
  } = props;
  const [orderState, {
    changeType
  }] = useOrder();
  const [typeSelected, setTypeSelected] = useState(null);
  const handleChangeOrderType = orderType => {
    setTypeSelected(orderType);
    changeType(orderType);
  };
  useEffect(() => {
    setTypeSelected(orderState.options.type);
  }, [orderState.options.type]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    typeSelected: typeSelected || orderState.options.type,
    handleChangeOrderType: props.handleChangeOrderType || handleChangeOrderType
  })));
};
OrderTypeControl.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Order availables to the control
   */
  orderTypes: PropTypes.arrayOf(object),
  /**
   * Custom function to control order type changes
   */
  handleChangeOrderType: PropTypes.func,
  /**
   * Components types before order type control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order type control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order type control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order type control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
};
OrderTypeControl.defaultProps = {
  orderTypes: [1, 2, 3, 4, 5],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};