import React, { createContext, useContext } from 'react';
import { Emitter } from '../../components/Emitter';

/**
 * Create EventContext
 * This context will manage the app events and provide an interface
 */
export const EventContext = /*#__PURE__*/createContext();

/**
 * Custom provider to events manager
 * This provider has a reducer for manage event state
 * @param {props} props
 */
export const EventProvider = ({
  children
}) => {
  const events = new Emitter();
  return /*#__PURE__*/React.createElement(EventContext.Provider, {
    value: [events]
  }, children);
};

/**
 * Hook to get and update events state
 */
export const useEvent = () => {
  const configManager = useContext(EventContext);
  return configManager || [new Emitter()];
};