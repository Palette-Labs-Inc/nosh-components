import React, { createContext } from 'react';
import { ConfigProvider } from '../../../../src/contexts/ConfigContext';
import { SessionProvider } from '../../../../src/contexts/SessionContext';
import { WebsocketProvider } from '../../../../src/contexts/WebsocketContext';
import { OrderProvider } from '../../../../src/contexts/OrderContext';
import { BusinessProvider } from '../../../../src/contexts/BusinessContext';
import { LanguageProvider } from '../../../../src/contexts/LanguageContext';
import { ApiProvider } from '../../../../src/contexts/ApiContext';
import { EventProvider } from '../../../../src/contexts/EventContext';
import { UtilsProviders } from '../../../../src/contexts/UtilsContext';
import { ValidationFieldsProvider } from '../../../../src/contexts/ValidationsFieldsContext';
import { ToastProvider } from '../../../../src/contexts/ToastContext';
import { CustomerProvider } from '../../../../src/contexts/CustomerContext';
import { OptimizationLoadProvider } from '../../../../src/contexts/OptimizationLoadContext';
import { OrderingThemeProvider } from '../../../../src/contexts/OrderingThemeContext';
import { NativeStrategy } from '../../NativeStrategy';

/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
export const OrderingContext = /*#__PURE__*/createContext();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const OrderingProvider = ({
  Alert,
  settings,
  children,
  isDisableToast,
  isDisabledDefaultOpts
}) => {
  const nativeStrategy = new NativeStrategy();
  const restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    use_root_point: settings.use_root_point,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings?.useOptimizeLoad
  };
  return /*#__PURE__*/React.createElement(OrderingContext.Provider, null, /*#__PURE__*/React.createElement(EventProvider, null, /*#__PURE__*/React.createElement(ApiProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/React.createElement(OptimizationLoadProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/React.createElement(LanguageProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/React.createElement(ConfigProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/React.createElement(OrderingThemeProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/React.createElement(UtilsProviders, null, /*#__PURE__*/React.createElement(ToastProvider, null, /*#__PURE__*/React.createElement(ValidationFieldsProvider, null, /*#__PURE__*/React.createElement(SessionProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/React.createElement(WebsocketProvider, {
    strategy: nativeStrategy,
    settings: Object.assign(settings.socket, restOfSettings)
  }, /*#__PURE__*/React.createElement(CustomerProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/React.createElement(OrderProvider, {
    isDisabledDefaultOpts: isDisabledDefaultOpts,
    strategy: nativeStrategy,
    Alert: Alert,
    isDisableToast: isDisableToast,
    franchiseId: settings?.franchiseSlug ?? settings?.franchiseId,
    businessSlug: settings?.businessSlug
  }, /*#__PURE__*/React.createElement(BusinessProvider, {
    businessId: settings?.businessSlug ?? settings?.businessId
  }, children)))))))))))))));
};