function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useApi } from '../../../contexts/ApiContext';
export const CountryList = props => {
  const {
    UIComponent
  } = props;
  const [ordering] = useApi();
  const [countriesState, setCountriesState] = useState({
    countries: [],
    loading: false,
    error: null
  });

  /**
   * Method to get the countries from API
   */
  const getCountries = async () => {
    try {
      setCountriesState({
        ...countriesState,
        loading: true
      });
      const {
        content: {
          error,
          result
        }
      } = await ordering.countries().get();
      if (!error) {
        setCountriesState({
          ...countriesState,
          loading: false,
          countries: result
        });
      } else {
        setCountriesState({
          ...countriesState,
          loading: false,
          error: result
        });
      }
    } catch (err) {
      setCountriesState({
        ...countriesState,
        loading: false,
        error: [err.message]
      });
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    countriesState: countriesState
  })));
};
CountryList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before place list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after place list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
};
CountryList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};