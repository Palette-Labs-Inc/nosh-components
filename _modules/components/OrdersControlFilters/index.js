function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import { useApi } from '../../contexts/ApiContext';
import { useSession } from '../../contexts/SessionContext';

/**
 * Component to manage controls behavior without UI component functionality
 */
export const OrdersControlFilters = props => {
  const {
    UIComponent
  } = props;
  const [ordering] = useApi();
  const [{
    token
  }] = useSession();
  const accessToken = props.accessToken || token;

  /**
   * Array to save controls state
   */
  const [controlsState, setControlsState] = useState({
    drivers: [],
    loading: true,
    error: null,
    driverGroups: [],
    paymethods: []
  });

  /**
   * Method to get controls from API
   */
  const getControls = async () => {
    try {
      setControlsState({
        ...controlsState,
        loading: true
      });
      const {
        content: {
          error,
          result
        }
      } = await ordering.setAccessToken(accessToken).controls().get();
      setControlsState({
        ...controlsState,
        loading: false,
        drivers: result?.drivers,
        driverGroups: result?.driver_groups,
        paymethods: result?.paymethods,
        error: error ? result : null
      });
    } catch (e) {
      setControlsState({
        ...controlsState,
        loading: false,
        error: e?.message ? controlsState.error?.push(e?.message) : ['ERROR']
      });
    }
  };
  useEffect(() => {
    getControls();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    controlsState: controlsState
  })));
};
OrdersControlFilters.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};