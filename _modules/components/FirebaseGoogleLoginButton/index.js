function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useApi } from '../../contexts/ApiContext';
import { useConfig } from '../../contexts/ConfigContext';
import * as firebase from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
export const FirebaseGoogleLoginButton = props => {
  const {
    UIComponent,
    handleSuccessGoogleLogin
  } = props;
  const [ordering] = useApi();
  const [{
    configs
  }] = useConfig();
  const [actionState, setActionState] = useState({
    loading: false,
    error: null
  });

  /**
   * handling response of Google
   */
  const signInWithGoogle = async () => {
    try {
      setActionState({
        ...actionState,
        loading: true
      });
      firebase.initializeApp({
        apiKey: configs?.google_login_api_key?.value,
        authDomain: configs?.google_login_auth_domain?.value
      });
      const auth = getAuth();
      const googleProvider = new GoogleAuthProvider();
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
      const response = await signInWithPopup(auth, googleProvider);
      handleSigninSuccess(response._tokenResponse);
    } catch (error) {
      setActionState({
        loading: false,
        error: [error.message]
      });
    }
  };

  /**
   * Function that return token of the user
   * @param {object} res from Google
   */
  const handleSigninSuccess = async tokenResponse => {
    try {
      const {
        content: {
          error,
          result
        }
      } = await ordering.users().authGoogle({
        access_token: tokenResponse.oauthIdToken,
        name: tokenResponse.firstName,
        lastname: tokenResponse.lastName
      });
      if (!error) {
        if (handleSuccessGoogleLogin) {
          handleSuccessGoogleLogin(result);
        }
      }
      setActionState({
        loading: false,
        error: error ? result : null
      });
    } catch (error) {
      setActionState({
        loading: false,
        error: [error.message]
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    signInWithGoogle: signInWithGoogle
  })));
};
FirebaseGoogleLoginButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to get login with google success event
   * @param {object} user User logged
   */
  handleSuccessGoogleLogin: PropTypes.func
};
FirebaseGoogleLoginButton.defaultProps = {};