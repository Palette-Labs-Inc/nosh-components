function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { useSession } from '../../../contexts/SessionContext';
import { useApi } from '../../../contexts/ApiContext';
import { useWebsocket } from '../../../contexts/WebsocketContext';
export const LogisticInformation = props => {
  const {
    orderId,
    UIComponent
  } = props;
  const [ordering] = useApi();
  const socket = useWebsocket();
  const [session] = useSession();
  /**
   * Array to save logistics
   */
  const [logisticInformation, setLogisticInformation] = useState({
    data: [],
    loading: true,
    error: null
  });

  /**
   * Method to get logistics from API
   */
  const getLogistics = async () => {
    try {
      setLogisticInformation({
        ...logisticInformation,
        loading: true
      });
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      };
      const response = await fetch(`${ordering.root}/logistic/orders/${orderId}/information`, requestOptions);
      const {
        result
      } = await response.json();
      if (response.ok) {
        setLogisticInformation({
          error: null,
          loading: false,
          data: result
        });
      } else {
        setLogisticInformation({
          ...logisticInformation,
          loading: false,
          error: result
        });
      }
    } catch (err) {
      setLogisticInformation({
        ...logisticInformation,
        loading: false,
        error: err.message
      });
    }
  };
  useEffect(() => {
    getLogistics();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    logisticInformation: logisticInformation,
    getLogistics: getLogistics
  })));
};
LogisticInformation.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
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
LogisticInformation.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};