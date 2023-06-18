function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useApi } from '../../contexts/ApiContext';
export const BusinessMenuListing = props => {
  const {
    businessId,
    UIComponent
  } = props;
  const [ordering] = useApi();
  /**
   * Object to save menus, loading and error values
   */
  const [businessMenuList, setBusinessMenuList] = useState({
    menus: [],
    loading: true,
    error: false
  });

  /**
   * Method to get menus from API
   */
  const getBusinessMenus = async () => {
    try {
      setBusinessMenuList({
        ...businessMenuList,
        loading: true
      });
      let where = null;
      if (businessId) where = [{
        attribute: 'business_id',
        value: businessId
      }];
      const fetchEndpoint = where ? ordering.businesses(businessId).menus().where(where) : ordering.businesses(businessId).menus();
      const {
        content: {
          result: menus
        }
      } = await fetchEndpoint.get();
      setBusinessMenuList({
        ...businessMenuList,
        loading: false,
        menus: menus
      });
    } catch (error) {
      setBusinessMenuList({
        ...businessMenuList,
        loading: false,
        error
      });
    }
  };
  useEffect(() => {
    getBusinessMenus();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    businessMenuList: businessMenuList
  })));
};
BusinessMenuListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Businessid, this must be contains an business id for get data from API
   */
  businessId: PropTypes.number,
  /**
   * Components types before products listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after products listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
};
BusinessMenuListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};