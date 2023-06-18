import React, { createContext } from 'react';
import { ApiProvider } from '../ApiContext';
import { EventProvider } from '../EventContext';
import { ToastProvider } from '../ToastContext';
/**
 * Create BillingContext
 * Wrapper to use all context to ordering apps
 */
export const BillingContext = /*#__PURE__*/createContext();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const BillingProvider = ({
  settings,
  children
}) => {
  return /*#__PURE__*/React.createElement(BillingContext.Provider, null, /*#__PURE__*/React.createElement(EventProvider, null, /*#__PURE__*/React.createElement(ApiProvider, {
    settings: Object.assign(settings.api, {
      project: settings.project,
      appId: settings.app_id
    })
  }, /*#__PURE__*/React.createElement(ToastProvider, null, children))));
};