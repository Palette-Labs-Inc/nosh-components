import React, { createContext } from 'react';
import { ConfigProvider } from '../ConfigContext';
import { SiteProvider } from '../SiteContext';
import { SessionProvider } from '../SessionContext';
import { WebsocketProvider } from '../WebsocketContext';
import { OrderProvider } from '../OrderContext';
import { BusinessProvider } from '../BusinessContext';
import { LanguageProvider } from '../LanguageContext';
import { ApiProvider } from '../ApiContext';
import { EventProvider } from '../EventContext';
import { UtilsProviders } from '../UtilsContext';
import { ValidationFieldsProvider } from '../ValidationsFieldsContext';
import { CustomerProvider } from '../CustomerContext';
import { ToastProvider } from '../ToastContext';
import { WebStrategy } from '../../webStrategy';
import { OrderingThemeProvider } from '../OrderingThemeContext';
import { OptimizationLoadProvider } from '../OptimizationLoadContext';

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
  isAlsea,
  children
}) => {
  const webStrategy = new WebStrategy();
  const restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings.useOptimizeLoad
  };
  return /*#__PURE__*/React.createElement(OrderingContext.Provider, null, /*#__PURE__*/React.createElement(EventProvider, null, /*#__PURE__*/React.createElement(ApiProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/React.createElement(OptimizationLoadProvider, {
    settings: Object.assign(settings.api, restOfSettings),
    strategy: webStrategy
  }, /*#__PURE__*/React.createElement(LanguageProvider, {
    settings: Object.assign(settings.api, restOfSettings),
    strategy: webStrategy
  }, /*#__PURE__*/React.createElement(ConfigProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/React.createElement(OrderingThemeProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/React.createElement(SiteProvider, {
    appId: settings.app_id
  }, /*#__PURE__*/React.createElement(UtilsProviders, null, /*#__PURE__*/React.createElement(ToastProvider, null, /*#__PURE__*/React.createElement(ValidationFieldsProvider, null, /*#__PURE__*/React.createElement(SessionProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/React.createElement(WebsocketProvider, {
    strategy: webStrategy,
    settings: Object.assign(settings.socket, restOfSettings)
  }, /*#__PURE__*/React.createElement(CustomerProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/React.createElement(OrderProvider, {
    strategy: webStrategy,
    Alert: Alert,
    isAlsea: isAlsea,
    franchiseId: settings?.franchiseSlug ?? settings?.franchiseId,
    businessSlug: settings?.businessSlug
  }, /*#__PURE__*/React.createElement(BusinessProvider, null, children))))))))))))))));
};