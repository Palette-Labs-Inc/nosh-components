function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { useApi } from '../../contexts/ApiContext';

/**
 * Component to manage drivers behavior without UI component
 */
export const DriverList = props => {
  const {
    drivers,
    UIComponent,
    propsToFetch
  } = props;
  const [ordering] = useApi();

  /**
   * Array to save drivers
   */
  const [driverList, setDriverList] = useState({
    drivers: [],
    loading: true,
    error: null
  });

  /**
   * Method to get drivers from API
   */
  const getDriverList = async () => {
    try {
      setDriverList({
        ...driverList,
        loading: true
      });
      const where = [{
        attribute: 'level',
        value: '4'
      }];
      const {
        content: {
          error,
          result
        }
      } = await ordering.users().select(propsToFetch).where(where).get();
      if (!error) {
        setDriverList({
          ...driverList,
          loading: false,
          drivers: result
        });
      } else {
        setDriverList({
          ...driverList,
          loading: false,
          error: result
        });
      }
    } catch (error) {
      setDriverList({
        ...driverList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      });
    }
  };
  useEffect(() => {
    if (drivers) {
      setDriverList({
        ...driverList,
        loading: false,
        drivers: drivers
      });
    } else {
      getDriverList();
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    driverList: driverList
  })));
};
DriverList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
};
DriverList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
};