function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component to render product ingredient
 */
export const ProductIngredient = props => {
  const {
    UIComponent,
    ingredient,
    onChange
  } = props;

  /**
   * Set current state
   */
  const state = {
    id: ingredient.id,
    name: ingredient.name,
    selected: props.state.selected
  };

  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */
  const changeState = newState => {
    onChange && onChange(newState, ingredient);
  };

  /**
   * Select/unselect the suboption
   */
  const toggleSelect = () => {
    changeState({
      selected: !state.selected
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    state: state,
    toggleSelect: toggleSelect
  })));
};
ProductIngredient.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Ingredient object to render UI
   */
  ingredient: PropTypes.object.isRequired,
  /**
   * Current state
   */
  state: PropTypes.shape({
    selected: PropTypes.bool
  }).isRequired,
  /**
   * Function to get ingredient changes
   */
  onChange: PropTypes.func
};
ProductIngredient.defaultProps = {
  state: {}
};