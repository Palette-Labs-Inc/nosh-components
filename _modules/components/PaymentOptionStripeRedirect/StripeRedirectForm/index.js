function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component to manage stripe redirect form behavior without UI component
 */
export const StripeRedirectForm = props => {
  const {
    UIComponent,
    handleStripeRedirect
  } = props;

  /**
   * Method to handle all workflow about stripe redirect page
   * @param {Object} param0 object with name, email and paydata from stripe form
   */
  const handleSubmitPaymentMethod = async ({
    type,
    name,
    email
  }) => {
    handleStripeRedirect && handleStripeRedirect({
      type,
      owner: {
        name,
        email
      }
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    handleSubmitPaymentMethod: handleSubmitPaymentMethod
  })));
};
StripeRedirectForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before stripe redirect form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after stripe redirect form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before stripe redirect form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after stripe redirect form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
};
StripeRedirectForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};