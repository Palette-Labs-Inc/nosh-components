function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useApi } from '../../contexts/ApiContext';
import { useSession } from '../../contexts/SessionContext';
import { useWebsocket } from '../../contexts/WebsocketContext';

/**
 * Component to manage paymethods behavior without UI component
 */
export const PaymethodList = props => {
  const {
    paymethods,
    UIComponent
  } = props;
  const [ordering] = useApi();
  const socket = useWebsocket();
  const [{
    token,
    loading
  }] = useSession();

  /**
   * Array to save paymethods
   */
  const [paymethodList, setPaymethodList] = useState({
    paymethods: [],
    loading: true,
    error: null
  });

  /**
   * Method to get paymethods from API
   */
  const getPaymethods = async () => {
    if (loading) return;
    try {
      setPaymethodList({
        ...paymethodList,
        loading: true
      });
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      };
      const functionFetch = `${ordering.root}/paymethods`;
      const response = await fetch(functionFetch, requestOptions);
      const {
        error,
        result
      } = await response.json();
      if (!error) {
        setPaymethodList({
          ...paymethodList,
          loading: false,
          paymethods: result
        });
      } else {
        setPaymethodList({
          ...paymethodList,
          loading: false,
          error: result
        });
      }
    } catch (err) {
      setPaymethodList({
        ...paymethodList,
        loading: false,
        error: err
      });
    }
  };
  useEffect(() => {
    if (paymethods) {
      setPaymethodList({
        ...paymethodList,
        loading: false,
        paymethods: paymethods
      });
    } else {
      getPaymethods();
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    paymethodList: paymethodList
  })));
};
PaymethodList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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
PaymethodList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};