function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useApi } from '../../contexts/ApiContext';

/**
 * Component to manage login behavior without UI component
 */
export const CmsContent = props => {
  const {
    UIComponent,
    pageSlug,
    onNotFound
  } = props;

  /**
   * Array to save the body of the page
   */
  const [cmsState, setCmsState] = useState({
    body: null,
    loading: false,
    error: null
  });
  const [ordering] = useApi();
  const requestsState = {};
  /**
   * Method used to get the page by slug
   */
  const getPage = async slug => {
    setCmsState({
      ...cmsState,
      loading: true
    });
    try {
      const source = {};
      requestsState.page = source;
      const {
        content: {
          error,
          result
        }
      } = await ordering.pages(slug).get({
        cancelToken: source
      });
      setCmsState({
        ...cmsState,
        loading: false
      });
      if (!error) {
        setCmsState({
          ...cmsState,
          body: result.body
        });
      } else {
        setCmsState({
          ...cmsState,
          error: result
        });
        onNotFound && onNotFound(pageSlug);
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setCmsState({
          ...cmsState,
          loading: false,
          error: [err.message]
        });
      }
    }
  };
  useEffect(() => {
    getPage(pageSlug);
    return () => {
      if (requestsState.page) {
        requestsState.page.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    cmsState: cmsState
  })));
};
CmsContent.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
};
CmsContent.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};